const db = require('../utils/db')


const get = async(req,res) => {
    const{count,rows} = await db.nhanvien.findAndCountAll()
    res.set('Content-Range', count).send(rows);
}

//api getbyID cho nhanvien
const getById = async (req, res) => {
    const nhanvien = await db.nhanvien.findOne({
        where: {id: req.params.id}
    });
    if(!nhanvien) res.status(404).send('không tìm thấy mặt hàng!');
    else res.send(nhanvien);
}

const create = async (req, res) => {
    const nhanvien = await db.nhanvien.create({
        ...req.body
    });
    res.send(nhanvien);
}

module.exports = {
    get,
    getById,
    create
}