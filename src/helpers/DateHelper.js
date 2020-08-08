module.exports = {
  convertDate(date) {
    return new Date(date).getTime();
  },

  dueDate(date) {
    const current_date = new Date(date);

    const due_date = new Date(
      current_date.setMonth(current_date.getMonth() + process.env.ADD_MONTH)
    );

    return this.convertDate(due_date);
  },
};
