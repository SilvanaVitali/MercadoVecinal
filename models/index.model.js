const User = require('./users.model.js');
const Post = require('./posts.model.js');
const Booking = require('./bookings.model.js');
const db = require('../config/sequelize.config.js');

User.hasMany(Post, { foreignKey: 'sellerID'});
Post.belongsTo(User, { foreignKey: 'sellerID', foreignKeyConstraint: true});

User.hasMany(Booking, { foreignKey: 'buyerID'});
Booking.belongsTo(User, { foreignKey: 'buyerID', foreignKeyConstraint: true} );

Post.hasMany(Booking, { foreignKey: 'postID'});
Booking.belongsTo(Post, { foreignKey: 'postID', foreignKeyConstraint: true});
Post.hasMany(Booking, { foreignKey: 'sellerID'});
Booking.belongsTo(Post, { foreignKey: 'sellerID', foreignKeyConstraint: true});


try {
    db.sync()
}
catch (err) {
    console.error('Something went wrong with the SYNC of the table Transferencia', err)
};

module.exports = { User, Post };