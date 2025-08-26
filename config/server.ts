// // path: config/server.ts

// export default ({ env }) => ({
//   host: 'HOST',
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   url: env('PUBLIC_URL', 'https://portfolio-cms-a0hn.onrender.com'),
// });

export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 10000),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env('PUBLIC_URL', 'https://portfolio-cms-a0hn.onrender.com'),
});
