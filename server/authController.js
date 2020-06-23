const bcrypt = require("bcrypt");

module.exports = {
  //REGISTER THE USER HERE-BACKEND
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const existingUser = await db.check_user_for_login(username);
    if (existingUser[0]) {
      return res.status(409).send("Username is already taken");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await db.register_user([username, hash]);

    req.session.user = {
      userId: newUser[0].id,
      username: newUser[0].username,
    };
    res.status(200).send(req.session.user);
  },

  //SIGN IN THE USER HERE-BACKEND
  signIn: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const user = await db.check_user_for_login(username);
    if (!user[0]) {
      return res.status(400).send("User does not exists");
    } else {
      const authenticated = bcrypt.compareSync(password, user[0].password);
      if (authenticated) {
        req.session.user = {
          userId: user[0].id,
          username: user[0].username,
          profile_pic: user[0].profile_pic
        };
        res.status(200).send(req.session.user);
      } else {
        res.status(403).send("Username or Password is incorrect");
      }
    }
  },

  //LOGOUT THE USER FROM THE SESSION THEY ARE CURRENTLY RUNNING
  logout: (req, res) => {
    req.session.destroy();
    console.log(req.session);
    res.sendStatus(200);
  },

  //GET THE USER BACK IF THERE IS ONE LOGGED IN AND ON THE SESSION.
  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },

  //UPDATE THE USER THAT IS LOGGED IN
  updateUser: async(req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {username, profile_pic} = req.body

    let userData = await db.update_user(id, username, profile_pic)
    .catch((error) => res.status(500).send(error));

    req.session.user = {
      id: userData[0].id,
      username: userData[0].username,
      profile_pic: userData[0].profile_pic
    }

    console.log(userData[0])
    res.status(200).send(req.session.user);
  }
};
