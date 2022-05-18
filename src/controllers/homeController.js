const homeController = {
    index: (req, res) => {
        res.render('index', {title: 'Home'})
    },
    service: (req, res) => {
        res.render('service', {title: 'service'})
    },
    login: (req, res) => {
        res.render('login', {title: 'login'})
    },
    contact: (req, res) => {
        res.render('contact', {title: 'contact'})
    }
}
module.exports = homeController;