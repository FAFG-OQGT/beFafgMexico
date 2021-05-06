exports.succes = (req, res, message, status) => {
  let statusCode = status || 200;
  let statusMessage = message || "";
  res.status(statusCode).send({
    error: false,
    codigo: status,
    data: statusMessage,
  });
};

exports.error = (req, res, message, status) => {
  let statusCode = status || 500;
  let statusMessage = message || "Internal Server Error";
  res.status(statusCode).send({
    error: true,
    codigo: statusCode,
    data: statusMessage,
  });
};
