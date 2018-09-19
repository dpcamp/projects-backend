const express = require('express'),
    router = express.Router(),
    models = require('../models')
    ;
Op = models.Sequelize.Op
job = models.job
rqs = models.requisition
inv = models.invoice


// All Requisitions GET Route
router.route('/')
    .get((req, res) => {
        rqs.findAll({}
        )
            .then((rqs) => {
                res.status(200).json({
                    data: rqs
                })
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    });
// Single Requisition Get Route

router.route('/id/:id')
    .get((req, res) => {
        rqs.find({
            where: {
            id: { [Op.eq]: req.params.id }
            }
        })
            .then((rqs) => {
                if (!rqs) {
                    res.status(404).json({message: `Req ID: ${id} not found!` })
                }
                res.status(200).json({
                    data: rqs
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });

// Requisition by req_num 
    router.route('/req_num/:id')
    .get((req, res) => {
        rqs.findAll({
            where: {
            req_num: { [Op.eq]: req.params.id }
            }
        })
            .then((rqs) => {
                if (!rqs) {
                    res.status(404).json({message: `Requisition Number: ${id} not found!` })
                }
                res.status(200).json({
                    data: rqs
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });
// requisition POST route
    router.route('/')
    .post((req, res) => {
  
      rqs.create(req.body)
        .then(function (nRqs) {
          res.status(200).json({
              data: nRqs
          })
        })
        .catch(function (err) {
          res.status(500).json({
              message: err
          })
        })
  
  
    });
// requisition PUT route by id
router.route('/id/:id')
  .put((req, res) => {
    const id = req.params.id;

    rqs.update(req.body, {
      where: {
        id: { [Op.eq]: id }
      }
    })

      .then(function (pJob) {

        res.status(200).json({ 
            message: `Req ID: ${id} updated!`,
            data: rqs 
        });
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        });
      });
  });
    


    module.exports = router;

