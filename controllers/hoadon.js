const db = require('../utils/db')


const get = async(req,res) => {
    const{count,rows} = await db.donhang.findAndCountAll({
        include: [
            {model: db.khachhang, as: "id_KH_khachhang"},
            {model: db.ctdonhang, as: "ctdonhangs", include: {
                model: db.mathang, as: "id_hang_mathang"
            }}
        ]
    })
    res.set('Content-Range', count).send(rows);
}

//api getbyID cho donhang
const getById = async (req, res) => {
    const donhang = await db.donhang.findOne({
        where: {id: req.params.id}
    });
    if(!donhang) res.status(404).send('không tìm thấy mặt hàng!');
    else res.send(donhang);
}

const create = async (req, res) => {
    console.log(req.body)
    const donhang = await db.donhang.create({
        ...req.body
    });
    console.log(req.body.ctdonhangs)
    if(typeof(req.body.ctdonhangs) === 'object') {
        const ctdonhang = req.body.ctdonhangs.map(ctdonhang=> {
            const ct = {
                'id_donhang': donhang.id,
                'id_hang': ctdonhang.id_hang,
                'soluong': ctdonhang.soluong,
                'tongtien': ctdonhang.tongtien
            }
            return ct
        });
        db.ctdonhang.bulkCreate(ctdonhang)
    }
    else{
        db.ctdonhang.create({
            id_hang: req.body.ctdonhangs.id_hang,
            id_donhang: donhang.id,
            soluong: req.body.ctdonhangs.soluong
        })
    }
    res.send(donhang)
}

module.exports = {
    get,
    getById,
    create
}