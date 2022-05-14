const idGerator = (list) => {
    var sit = true;
    while(sit){
        var id = Math.floor(Math.random() * 9999);
        sit = list.find(user => user.id == id);
    }
    return id;
}
module.exports = idGerator;