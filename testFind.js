require("dotenv").config();

const axios = require("axios");

const url = `${process.env.PROVIDER_URL} + 10766788827`;
const headers = { Authorization: `Bearer ${process.env.PROVIDER_TOKEN}` };

const req = async () => {
  try {
    axios.get(url, headers).then(function (a) {
      return console.log(a.data);
    });
  } catch (error) {
    console.error(error);
  }
};

req();
