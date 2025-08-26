module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: '@strapi/provider-upload-cloudinary',
        providerOptions: {
          cloud_name: env('dqdwmctpi'),
          api_key: env('617338963695839'),
          api_secret: env('nlcWKAgQ5BEg3J3ywI4VbvP3GM4'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });