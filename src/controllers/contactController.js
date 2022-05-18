const contactController = {
    index: (req,res) => {
        res.render('contact', {title: 'Contato'})
    }
}
module.exports = contactController;
