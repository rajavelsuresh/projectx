module.exports = (req, res, next) => {
  if (req.url === '/authenticate' && req.method === 'POST' && req.body.username === 'admin' && req.body.password === 'admin') {
    return res.status(200).send({
        id: 1,
        username: 'admin',
        password: 'admin',
        firstName: 'FirstName',
        lastName: 'LastName',
        token: 'fake-token' });
  }

  next();
};
