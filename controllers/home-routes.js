const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        title: "Bryan is awesome!",
        created_at: new Date(),
        user: {
            username: 'test_user'
        }
    });
});

module.exports = router;