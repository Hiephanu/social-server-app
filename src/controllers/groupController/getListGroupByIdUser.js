const db = require("../../models/index");

const getListGroupByIdUser = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await db.user.findAll({
      where: {
        id: id,
      }
    })
    const groups= users.group
    res.status(200).json({message:'Success',groups})
  } catch (error) {
    res.status(500).json({message:'Internal error'})
  }
};

module.exports = getListGroupByIdUser
