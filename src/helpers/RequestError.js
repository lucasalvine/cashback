module.exports = {
  request_error_file(response) {
    return response.status(401).json({ message: "Cannot find the register" });
  },

  request_error_password(response) {
    return response.status(401).json({ message: "Incorrect password" });
  },

  request_error_save(response) {
    return response.status(401).json({ message: "Cannot save the client." });
  },
};
