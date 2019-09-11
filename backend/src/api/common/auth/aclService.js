
function adminGuard(req, res, next) {
  if (req.user) {
    next();
  } else {
    return res.status(403).send({ error: ' 23 User should have admin access to use this endpoint' });
  }
}

module.exports = {
  adminGuard,
};
