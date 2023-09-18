const Item = require('../models/Item');

exports.index = (req, res) => {
    Item.find()
        .then(items => {
            res.render('index', { items });
        })
        .catch(err => console.log(err));
};

exports.addItem = (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    });

    newItem.save()
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
};
