function requestHandler(req, res) {
    User.findById(req.userId, function(err, user){
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.tasksId, function(err, tasks) {
                if (err) {
                    return res.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function (err) {
                        if (err) {
                            return res.send(err);
                        } else {
                            res.send('Task Completed');
                        }
                    })
                }
            })
        }
    })
    // whatever code

}

function requestHandler(req, res) {
    User.findById(req.userId)
        .then(function(user) {
            return Tasks.findById(user.tasksId)
        })
        .then(function(tasks) {
            tasks.completed = true;
            return tasks.save();
        })
        .then(function() {
            res.send('Tasks completed');
        })
        .catch(function(errors) {
            res.send(errors);
        })

}