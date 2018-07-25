const dateUtils = (() => {
  function dateFormat(date) {
    return new Date(date).toLocaleDateString();
  }

  return {
    dateFormat
  };
})();

export default dateUtils;
