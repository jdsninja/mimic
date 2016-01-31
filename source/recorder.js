const log = [];

export default () => {
  const record = (event) => {
    log.push(event);
    console.log(log);
  };

  const init = () => {

  };

  return {
    init,
    record
  };
};
