const nodeGeocoder = require('node-geocoder');
require('dotenv').config();

const options = {
  provider: 'google',

  apiKey: process.env.GEOCODE_API_KEY,
  formatter: null,
};

const geocoder = nodeGeocoder(options);

const getGeocoder = async (direccion, ciudad) => {
  try {
    const res = await geocoder.geocode({
      address: direccion,
      country: ciudad,
    });
    return res;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getGeocoder,
};
