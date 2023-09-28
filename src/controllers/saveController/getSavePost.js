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

        for (const item of savePostData) {
            const post = await db.post.findAll({
                where: {
                    id: item.dataValues.idPost
                }
            });
            
            if (post.length > 0) {
                const postData = {
                    id: post[0].dataValues.id,
                    content: post[0].dataValues.content,
                    file: post[0].dataValues.file,
                };
                savePost.push(postData);
            }
        }

        if (savePost.length > 0) {
            return res.status(200).json({ message: 'Success', savePost });
        } else {
            return res.status(200).json({ message: 'No saved posts', savePost: [] });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal error' });
    }
};

module.exports = getSavePost;

