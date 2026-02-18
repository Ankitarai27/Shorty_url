export const cookieOptions = {
    httpOnly: true,
    secure: true,        // MUST be true for cross-origin
    sameSite: "none",    // REQUIRED for cross-origin cookies
    maxAge: 1000 * 60 * 60 // 1 hour
}
