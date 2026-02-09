import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slice/authSlice";

export const checkAuth = async ({ context }) => {
    const { queryClient, store } = context;

    try {
        // Attempt to fetch user data
        const user = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: getCurrentUser,
        });

        if (!user) {
            throw redirect({ to: "/auth" });
        }

        // Sync with Redux store
        store.dispatch(login(user));
        
    } catch (error) {
        // If redirect was already thrown, re-throw it
        if (error.status === 307 || error.status === 302) throw error;
        
        console.error("Auth check failed:", error);
        throw redirect({ to: "/auth" });
    }
};