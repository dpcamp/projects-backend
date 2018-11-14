const express = require('express'),
    router = express.Router(),
    models = require('../models/')
    ;
Op = models.Sequelize.Op
job = models.job
rqs = models.requisition
inv = models.invoice

// Single invoice Get Route

// All Invoices GET Route
router.route('/')
    .get((req, res) => {
        inv.findAll({}
        )
            .then((inv) => {
                res.status(200).json({
                    data: inv
                })
            })
            .catch((err) => {
                res.status(500).json(err);
            })
    });

router.route('/:id')
    .get((req, res) => {
        inv.find({
            where: {
            inv_num: { [Op.eq]: req.params.id }
            }
        })
            .then((inv) => {
                if (!inv) {
                    res.status(404).json({message: `Invoice: ${id} not found!` })
                }
                res.status(200).json({
                    data: inv
                })
            })
            .catch((err) => {
                res.status(500).json({message: `${err}`});
            })
    });
// Invoice POST route
router.route('/')
  .post((req, res) => {

    inv.create(req.body)
      .then(function (newInvoice) {
        res.status(200).json({
            data: newInvoice
        })
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        })
      })


  });

  // Invoice PUT route by id
router.route('/:id')
.put((req, res) => {
  const id = req.params.id;

  inv.update(req.body, {
    where: {
      id: { [Op.eq]: id }
    }
  })
    .then(function (pinv) {

      res.status(200).json({ 
          message: `Invoice ID: ${id} updated!`,
          data: inv
      });
    })
    .catch(function (err) {
      res.status(500).json({
          message: err
      });
    });
});

// Invoice DELETE Route by ID
router.route('/:id')
  .delete((req, res) => {
    const id = req.params.id;

    inv.destroy({
      where: {
        id: { [Op.eq]: id }
      }
    })

      .then(function (inv) {

        res.status(200).json({ 
            message: `Invoice number:${inv.inv_num} deleted!`
        });
      })
      .catch(function (err) {
        res.status(500).json({
            message: err
        });
      });
  });


module.exports = router;