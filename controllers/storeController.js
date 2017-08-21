const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index');
  req.flash('error', 'Something Happened');
  req.flash('info', 'Something Happened');
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
