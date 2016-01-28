const Keyboard = () => {
  return {
    init: () => {
      document.body.addEventListener('keydown', function (event) {
        // if (!event) {
        //   event = window.event; // need to double check what this does exactly
        // }
        console.log(event.charCode, event.keyCode, String.fromCharCode(event.keyCode));
      });
    }
  };
};
export default Keyboard;
