const jwt = require('jsonwebtoken');
const { User } = require('../models/index.model.js');

async function verifyEmail(req, res, next){
    const email = req.body.email;
    const oldUser = await User.findOne({ where: { email }});
    if(oldUser) {
        return res.status(404).json({ error: 'Ese email ya se encuentra registrado' });
    }
    next();
};

function verifyToken(req, res, next) {
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(403).send('Un token es requerido para la autorización')
    };

    let decoded;
    try {
        decoded = jwt.verify(authorization, process.env.SECRET_KEY);
        console.log(decoded);
    } catch (error) {
        console.log('error en la decodificacion', error);
        res.status(400).json(error);
    }
    //2. Verificamos que el token aún no ha expirado
    const now = (new Date() / 1000)
    if (now > decoded.exp) {
        console.log({now}, {exp: decoded.exp});
        res.status(401).json({ err: 'Tu token expiró' });
    }
    //3. Guardamos el usuario en el objeto request
    req.data = decoded.data;
    //3. Si está todo ok, procedemos con el camino tradicional
    next();
};

module.exports = { verifyEmail, verifyToken };