const { User, Post } = require('../models/index.model.js');

// • Crear una nueva publicación.
const createPost = async (req, res) => {
    const { product, photo, description, initialStock, availableStock, price, sellerID } = req.body;
    try {
        let post = await Post.create({ product, photo, description, initialStock, availableStock, price, sellerID });
        return res.json(post);
    } catch (error) {
        return res.status(400).json({ error: error.message, stack: error.stack })
    }
};

// • Obtener todas las publicaciones.
const getPosts = async (req, res) => {
    try {
        let posts = await Post.findAll();
        return res.json(posts);
    } catch (error) {
        console.log(`>> Error mientras se encontraba los bootcamps: ${error}`);
        return res.status(400).json({ error: error.message, stack: error.stack })
    }
};

// • Obtener los Bootcamp por id llamado findById.
const getPostById = async (req, res) => {
    let { id } = req.params;
    try {
        let post = await Post.findByPk(id);
        if(!post){
            return res.status(404).json({ message: `No se encuentra los datos de la publicación con id: ${id}` })
        }
        return res.json(post);
    } catch (error) {
        console.log(`>> Error mientras se encontraba el post: ${error}`);
        return res.status(400).json({ error: error.message, stack: error.stack })
    }
};

const getMyPosts = async (req, res) => {
    let { sellerID } = req.query;
    sellerID = parseInt(sellerID)

    try {
        let posts = await Post.findAll({ where: {sellerID}});
        if(!posts){
            return res.status(404).json({ message: `No se encuentra los datos del vendedor con id: ${sellerID}` })
        }
        return res.json(posts);
    } catch (error) {
        console.log(`>> Error mientras se encontraba el post: ${error}`);
        return res.status(400).json({ error: error.message, stack: error.stack })
    }
};

const updatePost = async (req, res) => {
    let { id } = req.params;
    const { product, photo, description, initialStock, availableStock, price } = req.body;

    try {
        await Post.update({ product, photo, description, initialStock, availableStock, price },
            { where: { postID: id } });
        const post = await Post.findByPk(id);
        return res.json(post);
    } catch (error) {
        console.log(`>> Error mientras se actualizaba el post: ${error}`);
        return res.status(400).json({ error: error.message, stack: error.stack })
    }
}

// • Agregar un Usuario al Bootcamp llamado addUser.
const addUser = async (req, res) => {
    const { bootcamp_Id, user_id } = req.body;
    try {
        const bootcamp = await Bootcamp.findByPk(bootcamp_Id)
        const user = await User.findByPk(user_id);
        if(!bootcamp || !user) {
            if(!bootcamp) {
                throw new Error("No se encontro el bootcamp!")
             } else { 
                throw new Error("No se encontro el user!")
            }; 
        };
        bootcamp.addUser(user);
        console.log('***************************');
        console.log(`>> Agregado el usuario id=${user.id} al bootcamp con id=${bootcamp.id}`); 
        console.log('***************************');
        return res.json(bootcamp);
    } catch (error) {
        console.log(`>> Error mientras se estaba agregando Usuario al Bootcamp ${error}`);
        return res.status(400).json({ error: error.message, stack: error.stack })
    }
};

module.exports = { createPost, getPosts, getPostById, getMyPosts, updatePost };