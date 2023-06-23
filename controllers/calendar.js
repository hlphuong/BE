const db = require('../utils/db')


const get = async(req,res) => {
    const{count,rows} = await db.calendar.findAndCountAll()
    res.set('Content-Range', count).send(rows);
}

//api getbyID cho calendar
const getById = async (req, res) => {
    const calendar = await db.calendar.findOne({
        where: { id_nv: req.params.idnv }
    });
    if(!calendar) res.status(404).send('không tìm thấy kế hoạch!');
    else res.send(calendar);
}
const create = async (req, res) => {
    const calendar = await db.calendar.create({
        ...req.body
    });
    res.send(calendar);
}

const deleteById = async (req, res) => {
    const calendar = await db.calendar.findOne({
        where: {id: req.params.id}
    });
    if(!calendar) res.status(404).send('calendar not found!');
    else {
        await db.calendar.destroy({
            where: {id: req.params.id}
        });
        res.send('calendar successfully deleted!');
    }
}
module.exports = {
    get,
    getById,
    create,
    deleteById
}