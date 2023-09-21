const db = require('../../models/index');

const getSavePost = async (req, res) => {
    const id = req.params.id;
    const savePost = [];
    try {
        const savePostData = await db.Save.findAll({
            where: {
                idUser: id
            }
        });
        
        // Sử dụng Promise.all để chờ tất cả các cuộc gọi bất đồng bộ hoàn thành
        await savePostData.map(async (item) => {
            const post = await db.post.findAll({
                where: {
                    id: item.dataValues.idPost
                }
            });
            console.log(post);
            savePost.push(post.dataValues)
        });
        console.log(savePost);
        return res.status(200).json({ message: 'Success', savePost });
    } catch (error) {
        console.error(error); // In ra lỗi để xem lỗi cụ thể là gì
        return res.status(500).json({ message: 'Internal error' });
    }
};

module.exports = getSavePost;
