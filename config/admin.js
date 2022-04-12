module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '685771f36380a44a7af110c07eab36c3'),
  },
});
