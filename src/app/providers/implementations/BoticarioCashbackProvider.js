const axios = require("axios");

class BoticarioCashbackProvider {
  getCashBackAccumulated(document) {
    const url = `${process.env.PROVIDER_URL} + ${document}`;
    const headers = { Authorization: `Bearer ${process.env.PROVIDER_TOKEN}` };

    const cashResult = axios
      .get(url, headers)
      .then(function (response) {
        return response.data;
      })
      .catch(function (err) {
        return err;
      });

    return cashResult;
  }
}

module.exports = new BoticarioCashbackProvider();
