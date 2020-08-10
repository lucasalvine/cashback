require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

module.exports = {
  convertDate(date) {
    return new Date(date).getTime();
  },

  dueDate(date) {
    const currentDate = new Date(date);

    const dueDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + process.env.ADD_MONTH)
    );

    return this.convertDate(dueDate);
  },
};
