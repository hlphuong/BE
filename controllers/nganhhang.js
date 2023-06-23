const db = require('../utils/db')

const get = async(req,res) => {
    const{count,rows} = await db.nganhhang.findAndCountAll()
    res.set('Content-Range', count).send(rows);
}

module.exports = {
    get
}