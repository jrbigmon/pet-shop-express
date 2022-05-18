const serviceController = {
    index: (req, res) => {
        res.render('service', {title: 'service'})
    }
}
module.exports = serviceController;