import session from 'next-session';

export const withSessionRoute = session({
  name: 'your-session-cookie-name',
  secret: process.env.SECRET_COOKIE_PASSWORD as string,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
});
