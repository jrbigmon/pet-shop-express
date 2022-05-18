const homeController = {
    index: (req, res) => {
        res.render('./home/index', {title: 'Home'})
    },
    service: (req, res) => {
        res.render('./home/service', {title: 'service'})
    },
    login: (req, res) => {
        res.render('./home/login', {title: 'login'})
    },
    contact: (req, res) => {
        res.render('./home/contact', {title: 'contact'})
    }
}
module.exports = homeController;