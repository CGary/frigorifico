export default (method, query, res) => {
  const catchCallback = (err) => {
    try {
      res.status(500).json(err);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  const thenCallback = (result) => {
    res.status(200).json(result);
  };
  method(query).then(thenCallback).catch(catchCallback);
};
