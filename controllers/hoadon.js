const db = require('../utils/db')


const get = async(req,res) => {
    const{count,rows} = await db.hoadon.findAndCountAll()
    res.set('Content-Range', count).send(rows);
}

//api getbyID cho hoadon
const getById = async (req, res) => {
    const hoadon = await db.hoadon.findOne({
        where: {id: req.params.id}
    });
    if(!hoadon) res.status(404).send('không tìm thấy mặt hàng!');
    else res.send(hoadon);
}
const create = async (req, res) => {
    const hoadon = await db.hoadon.create({
        ...req.body
    });
    res.send(hoadon);
}
module.exports = {
    get,
    getById,
    create
}