const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
    
    try {

        const {phone, password} = req.body;

        req.body.password = await bcrypt.hash(password, 10);

        const user = await User.findOne({ where: { phone: phone } });

        if (!user) {
            const newUser = await User.create({phone,password});
            res.status(201).json({msg: "User created successfully"});
        } else {
            console.log(error)
            res.status(400).json({msg: "Error al crear usuario"});
        }

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'There was a problem trying to create the user' });
    }
}
