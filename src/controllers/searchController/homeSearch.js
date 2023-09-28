const db = require("../../models/index");
const { Op } = require("sequelize");
const homeSearch = async (req, res) => {
  const search = req.query.search;
  try {
    const formatSearch = search.toLowerCase();
    const users = await db.user.findAll({
      where: {
        name: {
          [Op.substring]: formatSearch,
        },
      },
      limit: 4,
    });
    const posts = await db.post.findAll({
      where: {
        content: {
          [Op.substring]: formatSearch,
        },
      },
      limit: 4,
    });
    return res.status(200).json({
      message: "Success",
      users: users,
      posts: posts,
    });
  } catch (error) {
    return res.status(500).son({
      message: "Internal error",
    });
  }
};

module.exports = homeSearch;
