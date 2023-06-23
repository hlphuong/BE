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

const edit = async (req, res) => {
    const data = await db.taikhoan.findOne({
        where: {id: req.params.id}
    });
    if(!data) res.status(404).send('taikhoan not found!');
    else{
        await db.taikhoan.update({...req.body}, {
            where: {id: req.params.id}
        });
        res.send('taikhoan successfully updated!');
    }
}

const deleteById = async (req, res) => {
    const data = await db.taikhoan.findOne({
        where: {id: req.params.id}
    });
    if(!data) res.status(404).send('taikhoan not found!');
    else{
        await db.taikhoan.destroy({
            where: {id: req.params.id}
        });
        res.send('taikhoan successfully deleted!');
    }
}

module.exports = {
    get,
    getById,
    create,
    edit,
    deleteById
}