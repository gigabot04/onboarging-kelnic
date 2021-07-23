const sendReq = () => {
  return fetch('../data.json').then((response) => {
    return response.json();
  });
};

window.sendReq = sendReq;
export {sendReq};
