module.exports = {
  response_error_file(response) {
    return response.status(401).json({ message: "Cannot find the register" });
  },

  response_error_password(response) {
    return response.status(401).json({ message: "Incorrect password" });
  },

  response_error_save(response, message) {
    return response.status(401).json({ message: "Cannot save " + message });
  },
};
