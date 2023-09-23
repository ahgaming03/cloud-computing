const Item = require("../models/Item");
// item_idex, item_create_post, item_create_get, item_details, item_delete

const item_index = (req, res) => {
    Item.find()
        .sort({ createdAt: -1 })
        .then((result) => {
            res.render("items/index", { title: "All items", items: result });
        })
        .catch((err) => {
            console.error(err);
        });
};

const item_create_post = (req, res) => {
    const item = new Item(req.body);

    item.save()
        .then((result) => {
            res.redirect("/items");
        })
        .catch((err) => {
            console.error(err);
        });
};

const item_create_get = (req, res) => {
    res.render("items/create", { title: "Create a new item" });
};

const item_details = (req, res) => {
    const id = req.params.id;
    Item.findById(id)
        .then((result) => {
            res.render("items/details", { item: result, title: "Item Details" });
        })
        .catch((err) => {
            res.status(404).render("404", { title: "404" });
        });
};

const item_delete = (req, res) => {
    const id = req.params.id;
    Item.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: "/items" });
        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = {
    item_index,
    item_create_post,
    item_create_get,
    item_details,
    item_delete,
};
