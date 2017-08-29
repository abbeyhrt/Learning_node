const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  req.flash('error', 'Something Happened');
  req.flash('info', 'Something Happened');
  req.flash('warning', 'Something Happened');
  req.flash('success', 'Something Happened');
  res.render('index');
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add store' });
};

exports.createStore = async (req, res) => {
  const store = new Store(req.body);
  await store.save();
  req.flash(
    'success',
    `Sucessfully Created ${store.name}. Care to leave a review?`
  );
  res.redirect('/');
};

exports.getStores = async (req, res) => {
  const stores = await Store.find();

  res.render('stores', { title: 'Stores', stores });
};

exports.editStore = async (req, res) => {
  const store = await Store.findOne({ _id: req.params.id });
  res.render('editStore', { title: `Edit ${store.name}`, store });
};

exports.updateStore = async (req, res) => {
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return thupdatese new store instead of old store
    runValidators: true,
  }).exec();
  req.flash(
    'success',
    `Successfully updated ${store.name}. <a href="/stores/${store.slug}">View Store -></a> `
  );
  res.redirect(`/stores/${store._id}/edit`);
};
