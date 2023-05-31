const globalErrHandler = (err, req, res, next) => {
  res.status(400).json({
    status: "failed",
    message: err,
  });
};

module.exports = globalErrHandler;
