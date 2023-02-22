getDate = () => {
  postMessage(new Date());
  setTimeout(getDate, 1000);
};

getDate();
