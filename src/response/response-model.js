const BaseResponse = ({ status, message = "" }) => ({
  status,
  message,
});

const Success = (data, message) => {
  const model = BaseResponse({
    status: 0,
    message,
  });

  return {
    ...model,
    data,
  };
};

const Error = (code, message, error) => {
  const model = BaseResponse({
    status: code,
    message,
  });

  return {
    ...model,
    error,
  };
};
module.exports = { Success, Error };
