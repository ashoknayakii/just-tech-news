const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      console.log("if")
      res.redirect('/login');
    } else {
      console.log("else")
      next();
    }
  };
  
  module.exports = withAuth;