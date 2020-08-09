const axios = require("axios");

class BoticarioCashbackProvider {
  getCashBackAccumulated(document) {
    const url = `${process.env.PROVIDER_URL} + ${document}`;
    const headers = { Authorization: `Bearer ${process.env.PROVIDER_TOKEN}` };

    const cashback_accumulated = async function () {
      try {
        axios.get(url, headers).then(function (a) {
          return a.data;
        });
      } catch (error) {
        console.error(error);
      }
    };

    console.log(cashback_accumulated);
    cashback_accumulated();
  }
}

module.exports = new BoticarioCashbackProvider();
