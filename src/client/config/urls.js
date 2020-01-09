const server = () => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080/principles/read';
  } else {
    return 'https://small-reminders-prod.herokuapp.com/principles/read';
  }
};

module.exports = { server };
