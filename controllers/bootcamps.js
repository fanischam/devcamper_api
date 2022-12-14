exports.getBootcamps = (req, res, next) => {
  res.status(200).send({ success: true, msg: 'Show all bootcamps' });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).send({ success: true, msg: 'Create a bootcamp' });
};

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `Display bootcamp ${req.params.id}` });
};

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .send({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
