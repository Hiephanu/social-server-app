const db = require('../models/index')
let getHomePage = (req, res) => {
  const book = [
    {
      id: 1,
      name: "Truyện kiều",
    },
    {
        id:2,
        name:"Tác giả"
    }
  ];
  const test =async ()=>{
    console.log(await db.user.findAll({raw:true,where:{id:0}}));
  }
  test()
  return res.status(200).json({data:book})
};
let aboutPage = (req, res) => {
  return res.send("About Page");
};
module.exports = {
  getHomePage,
  aboutPage,
};
