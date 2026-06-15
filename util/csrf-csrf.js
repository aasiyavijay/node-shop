module.exports = {
  getSecret: () => "secret",
  cookieName: "__Host-psifi.x-csrf-token",
  cookieOptions: {
    sameSite: "None",
    path: "/",
    secure: true,
    signed: true,
  },
  getSessionIdentifier: (req) => req.session.id,
  getTokenFromRequest: (req) => {
    return req.body._csrf;
  },
};
