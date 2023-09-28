const db = require("../../models/index");
const { Op } = require("sequelize");
const searchFriend = async (req, res) => {
  const  search = req.query.search
  try {
    const formatSearch = search.toLowerCase();
    const users = await db.user.findAll({
      where: {
        name: {
          [Op.substring]: formatSearch,
        },
      },
      limit:4
    });
    return res.status(200).json({ results: users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal error" });
  }
};

module.exports = searchFriend;
