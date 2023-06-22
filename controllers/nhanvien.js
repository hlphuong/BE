const db = require('../utils/db')


const get = async(req,res) => {
    const{count,rows} = await db.taikhoan.findAndCountAll()
    res.set('Content-Range', count).send(rows);
}

//api getbyID cho nhanvien
const getById = async (req, res) => {
    const taikhoan = await db.taikhoan.findOne({
        where: {id: req.params.id}
    });
    if(!taikhoan) res.status(404).send('không tìm thấy tài khoản!');
    else res.send(taikhoan);
}

const create = async (req, res) => {
    const taikhoan = await db.taikhoan.create({
        ...req.body
    });
    res.send(taikhoan);
}

module.exports = {
    get,
    getById,
    create
}