const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment.js');


User.hasMany(Post, {
    onDelete: 'CASCADE',
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    onDelete: 'CASCADE',
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };