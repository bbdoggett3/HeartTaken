module.exports = {
    getGoal: (req, res) => {
       const db = req.app.get("db");
       const {goal_type_id} =req.params
       
       db.get_goal(goal_type_id)
       .then((goal) => res.status(200).send(goal[0]))
       .catch((error) => {
           res.status(500).send(error)
           console.log(error)
       })
    },

    goalProgress: (req, res) => {
        const db = req.app.get("db")

        db.progress_goals(req.session.user.userId)
        .then((progress) => res.status(200).send(progress))
        .catch((error) => {
            res.status(500).send(error)
        })
    },

    updateGoal: (req, res) => {
        const db =req.app.get("db")
        const {goal_type_id} = req.params
        const {userId} = req.session.user

        db.update_goal(goal_type_id, userId)
        .then((results) => res.status(200).send(results))
        .catch((error) => {
            res.status(500).send(error)
        })

    }
}