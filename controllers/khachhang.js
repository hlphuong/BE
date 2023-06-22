const db = require('../utils/db')


const get = async(req,res) => {
    const{count,rows} = await db.khachhang.findAndCountAll()
    res.set('Content-Range', count).send(rows);
}

//api getbyID cho khachhang
const getById = async (req, res) => {
    const khachhang = await db.khachhang.findOne({
        where: {id: req.params.id}
    });
    if(!khachhang) res.status(404).send('không tìm thấy mặt hàng!');
    else res.send(khachhang);
}
const create = async (req, res) => {
    const khachhang = await db.khachhang.create({
        ...req.body
    });
    res.send(khachhang);
}
module.exports = {
    get,
    getById,
    create
}