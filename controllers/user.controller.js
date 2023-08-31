const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const { User } = require('../models/index.model.js');

//Para crear un JWT
const login = async (req, res) => {
    //1. Recibo los parametros del form
    const { email, password } = req.body;

    //2. Verificamos que el usuario este en "BBDD"
    const user = await User.findOne({where: {email}});
    if (!user) {
        return res.status(404).json({ error: 'Email ingresado no está registrado' });
    }

    //3. Verificamos que la contraseña sea al correcta
    // const equal = await bcrypt.compare(password, user.password)
    // if (!equal) {
    //     return res.status(404).json({ err: 'Contraseña incorrecta!' });
    // }
    if (password != user.password) {
        return res.status(404).json({ error: 'Contraseña incorrecta' });
    }

    //3.1 Calculo 1 día más
    const one_day = Math.floor(new Date() / 1000) + 3600*24;

    //4. Creo el token
    const token = jwt.sign({
        exp: one_day,
        data: {
            id: user.userID,
            name: user.name,
            email: user.email
        }
    }, process.env.SECRET_KEY)

    //4. Le retorno el token al cliente
    res.json(token)
};

const signup = async (req, res) => {
        //1. Recibo los parametros del form
        const { name, email, password } = req.body;

        //2. Verificamos que los 4 campos existan
        if (!name || !email || !password) {
            return res.status(400).json({
                error: 'Debe ingresar todos los campos'
            })
        };
    
        // //3. Verificamos que contraseñas coincidan
        // if (password != pass_confirm) {
        //     return res.status(400).json({
        //         err: 'Las contraseñas no coinciden'
        //     })
        // };
    
        //5. Creamos el usuario en la base de datos
        let new_user;
        try {
            // const pass_encrypt = await bcrypt.hash(password, 10);
            // console.log(pass_encrypt);
            // new_user = await User.create({ name, email, password: pass_encrypt });
            new_user = await User.create({ name, email, password });
        } catch (error) {
            return res.status(400).json(error)
        }
    
        //6. Genero el nuevo token y se lo envío al usuario
        const one_day = Math.floor(new Date() / 1000) + 3600*24;
    
        //4. Creo el token
        const token = jwt.sign({
            exp: one_day,
            data: {
                id: new_user.userID,
                name: new_user.name,
                email: new_user.email
            }
        }, process.env.SECRET_KEY)
        
        //4. Le retorno el token al cliente
        res.json(token)
};

//Para devolver info del token
const mySession = async (req, res) => {
    const data = req.data
    res.json(data);
};

module.exports = { login, signup, mySession };