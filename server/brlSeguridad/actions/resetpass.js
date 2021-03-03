const FILE = "brlLogin/actions/resetpass.js";

export default (query) => {
  return new Promise((resolve) => {
    global.log(FILE, "log", query);
    resolve(query);
  });
};
