const db = require('../utils/db')


const get = async(req,res) => {
    const{count,rows} = await db.mathang.findAndCountAll()
    res.set('Content-Range', count).send(rows);
}

//api getbyID cho mathang
const getById = async (req, res) => {
    const mathang = await db.mathang.findOne({
        where: {id: req.params.id}
    });
    if(!mathang) res.status(404).send('không tìm thấy mặt hàng!');
    else res.send(mathang);
}
const create = async (req, res) => {
    const mathang = await db.mathang.create({
        ...req.body
    });
    res.send(mathang);
}
module.exports = {
    get,
    getById,
    create
}