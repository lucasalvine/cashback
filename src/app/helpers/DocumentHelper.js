module.exports = {
  documentValidator(document) {
    const cleanDocument = document.replace(/[^\d]+/g, "");
    const length = cleanDocument.length === 11;

    return cleanDocument && length ? true : false;
  },

  documentConverter(document) {
    return document.replace(/[^\d]+/g, "");
  },
};
