const bcrypt = require('bcrypt');

module.exports = {
    //REGISTER THE USER HERE-BACKEND
    register: async(req, res) => {
        const db = req.app.get("db");
        const { username, password } = req.body;

        const existingUser = await db.check_user_for_login(username);
        if(existingUser[0]) {
            return status(409).send("Username is already taken");
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newUser = await db.register_user([username, hash]);

        req.session.user = {
            userId: newUser[0].id,
            username: newUser[0].username
        };
        res.status(200).send(req.session.user);
    },

    //SIGN IN THE USER HERE-BACKEND
    signIn: async(req, res) => {
        const db = req.app.get("db");
        const { username, password } = req.body;

        const user = await db.check_user_for_login(username);
        if(!user[0]) {
            return status(400).send("User does not exists");
        }else {
            const authenticated =bcrypt.compareSync(password, user[0].password);
            if(authenticated) {
                req.session.user = {
                    userId: user[0].id,
                    username: user[0].username
                };
                res.status(200).send(req.session.user);
            }else {
                res.status(403).send("Username or Password is incorrect");
            }
        }
    },
    logout: (req, res) => {},
    getUser: (req, res) => {}
}