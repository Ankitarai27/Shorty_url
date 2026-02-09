import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import HistoryPage from "../pages/HistoryPage";
import { checkAuth } from "../utils/helper";

export const historyRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/history',
    component: HistoryPage,
    beforeLoad: checkAuth, // Secure it just like the dashboard
});