const db = require("../../models/index");
const { Op } = require("sequelize");
const getAllFriend = async (req,res) => {
  const id = req.query.id;
  try {
    const friends = await db.friendship.findAll({
      where: {
        [Op.or]: [
          { idUserSend: id, status: "accept" },
          { idUserRecieve: id, status: "accept" },
        ],
      },
    });
    return res.status(200).json({message:'Success',friends})
  } catch (error) {
    console.log(error);
    return res.json({message:"Fail"})
  }
};

module.exports =  getAllFriend
