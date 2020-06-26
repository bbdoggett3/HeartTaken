module.exports = {
    getGoal: (req, res) => {
       const db = req.app.set("db");
       const {goal_type_id} =req.params
       
       db.get_goal(goal_type_id)
       .then((goal) => res.status(200).send(goal[0]))
       .catch((error) => {
           res.status(500).send(error, "Cannot get a goal at this time. Try again later")
           console.log(error)
       })
    },

    goalProgress: (req, res) => {
        const db = req.app.set("db")

        db.progress_goals(req.session.user.userId)
        .then((progress) => res.status(200).send(progress))
        .catch((error) => {
            res.status(500).send(error, "Cannot get progress for the user goals.")
        })
    },
}