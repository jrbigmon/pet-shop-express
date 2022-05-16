const homeController = {
    homePage: (req, res) => {
        res.render('index', {
            name: "Vagner",
            title: "HomePage"
        })
    }
}
module.exports = homeController;