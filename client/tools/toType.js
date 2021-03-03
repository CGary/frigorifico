//devuelve el tipo de objeto
export default (obj) =>
  ({}.toString
    .call(obj)
    .match(/\s([a-z|A-Z]+)/)[1]
    .toLowerCase());
