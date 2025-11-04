
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
};

export const setTokensInCookies = (res, accessToken, refreshToken) => {
    res.cookie('accessToken', accessToken, { ...cookieOptions, maxAge: 15 * 60 * 1000 }); // 15 min
    res.cookie('refreshToken', refreshToken, { ...cookieOptions, maxAge: 7 * 24 * 60 * 60 * 1000 }); // 7 days
};

export const clearTokensFromCookies = (res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
};
