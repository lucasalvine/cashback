module.exports = {
  documentValidator(document) {
    const cleanDocument = this.documentConverter(document);
    const length = cleanDocument.length === 11;

    return cleanDocument && length ? true : false;
  },

  documentConverter(document) {
    return document.replace(/[^\d]+/g, "");
  },
};
