const homeController = {
    index: (req, res) => {
        res.render('index', {
            name: "Vagner",
            title: "Home"
        })
    }
}
module.exports = homeController;