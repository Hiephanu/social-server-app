const db = require("../../models/index");
const { Op } = require("sequelize");

const getPostHome = async (req, res) => {
  //   const offset = parseInt(req.query.offset) || 0;
  const limit = 5;
  //   const id = req.query.id;
  const id = req.params.id;
  const {offset} = req.body
  const offsetInt= parseInt(offset)
  console.log(id,offset);
  try {
    let friendId = [];
    let friend = await db.friendship.findAll({
      where: {
        [Op.or]: [
          { idUserSend: id, status: "accept" },
          { idUserRecieve: id, status: "accept" },
        ],
      },
    });
    for (let i = 0; i < friend.length; i++) {
      if (friend[i].idUserSend == id) {
        friendId.push(friend[i].idUserRecieve);
      } else if (friend[i].idUserRecieve == id) {
        friendId.push(friend[i].idUserSend);
      }
    }
    console.log(friendId);
    const posts = await db.post.findAll({
      where: {
        userId: friendId,
      },
      offsetInt,
      limit,
    });
    return res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal error" });
  }
};

module.exports = getPostHome;
