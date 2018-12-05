const express = require('express'),
    router = express.Router(),
    models = require('../models')
    ;
Op = models.Sequelize.Op
usr = models.user
job = models.job
let loggedIn = false;
//Single User GET Route
router.route('/token/:id')
    
    .get((req, res) => {
        usr
        .find({
            where: {
            username: { [Op.eq]: req.params.id }
            }
        })
            .then((user) => {
                if (!user) {
                    loggedIn = false;
                    res.status(404).json({data: loggedIn })
                }
                loggedIn = true;
                res.status(200).json({
                    data: loggedIn
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });


//All Users GET Route
router.route('/')
    .get((req, res) => {
        usr.findAll({}
        )
            .then((usr) => {
                res.status(200).json({
                    data: usr
                })
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    });
    
//Single User GET Route
router.route('/:id')
    
    .get((req, res) => {
        usr
        .find({
            where: {
            username: { [Op.eq]: req.params.id }
            },
            include: [
                {model: job}
            ]
        })
            .then((user) => {
                if (!user) {
                    loggedIn = false;
                    res.status(200).json({
                        authenticated: loggedIn,
                        message: `Username: ${req.params.id} not found!` 
                    })
                }
                loggedIn = true;
                res.status(200).json({
                    authenticated: loggedIn,
                    data: user
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });

//User POST Route
    router.route('/')
    .post((req, res) => {
      usr.create(req.body)
  
        .then(function (newUser) {
  
          res.status(200).json({ 
              message: `User created!`,
              data: newUser
          });
        })
        .catch(function (err) {
          res.status(500).json({
              message: err
          });
        });
    });
// User PUT route by username
router.route('/:id')
  .put((req, res) => {
    usr.update(req.body, {
      where: {
        username: { [Op.eq]: req.params.username }
      }
    })
      .then(function (user) {

        res.status(200).json({ 
            message: `User updated!`,
            data: user 
        });
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        });
      });
  });
// User DELETE Route by username
router.route('/:id')
  .delete((req, res) => {
    const id = req.params.id;
    usr.destroy({
      where: {
        username: { [Op.eq]: id }
      }
    })

      .then(function (inv) {

        res.status(200).json({ 
            message: `Username: ${id} deleted!`
        });
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        });
      });
  });

module.exports = router;
