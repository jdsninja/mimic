import * as Utils from './utils';

export const onkeydown = (props, callback) => {
  return document.body.addEventListener('keydown', (e) => {
    // if (!event) {
    //   event = window.event; // need to double check what this does exactly
    // }
    callback(e);
    return e;
  });
};

export const onmousemove = (props, callback) => {
  return Utils.getElement(props.containerId).addEventListener('mousemove', (e) => {
    callback(e);
    return e;
  });
};

export const ondblclick = (props, callback) => {
  return Utils.getElement(props.containerId).addEventListener('dblclick', (e) => {
    callback(e);
    return e;
  });
};

export const onclick = (props, callback) => {
  return Utils.getElement(props.containerId).addEventListener('click', (e) => {
    callback(e);
    return e;
  });
};

export const onscroll = (props, callback) => {
  return document.addEventListener('scroll', (e) => {
    callback(e);
    return e;
  });
};
