const isAdmin = (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({ 
      status:403,
      message: "Access denied Admin only" });
  }
  next();
};

module.exports= isAdmin;