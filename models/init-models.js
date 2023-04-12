var DataTypes = require("sequelize").DataTypes;
var _ctdonhang = require("./ctdonhang");
var _donhang = require("./donhang");
var _khachhang = require("./khachhang");
var _mathang = require("./mathang");
var _nganhhang = require("./nganhhang");
var _phanquyen = require("./phanquyen");
var _taikhoan = require("./taikhoan");

function initModels(sequelize) {
  var ctdonhang = _ctdonhang(sequelize, DataTypes);
  var donhang = _donhang(sequelize, DataTypes);
  var khachhang = _khachhang(sequelize, DataTypes);
  var mathang = _mathang(sequelize, DataTypes);
  var nganhhang = _nganhhang(sequelize, DataTypes);
  var phanquyen = _phanquyen(sequelize, DataTypes);
  var taikhoan = _taikhoan(sequelize, DataTypes);

  ctdonhang.belongsTo(donhang, { as: "id_donhang_donhang", foreignKey: "id_donhang"});
  donhang.hasMany(ctdonhang, { as: "ctdonhangs", foreignKey: "id_donhang"});
  donhang.belongsTo(khachhang, { as: "id_KH_khachhang", foreignKey: "id_KH"});
  khachhang.hasMany(donhang, { as: "donhangs", foreignKey: "id_KH"});
  ctdonhang.belongsTo(mathang, { as: "id_hang_mathang", foreignKey: "id_hang"});
  mathang.hasMany(ctdonhang, { as: "ctdonhangs", foreignKey: "id_hang"});
  taikhoan.belongsTo(phanquyen, { as: "role_phanquyen", foreignKey: "role"});
  phanquyen.hasMany(taikhoan, { as: "taikhoans", foreignKey: "role"});
  donhang.belongsTo(taikhoan, { as: "id_NV_taikhoan", foreignKey: "id_NV"});
  taikhoan.hasMany(donhang, { as: "donhangs", foreignKey: "id_NV"});

  return {
    ctdonhang,
    donhang,
    khachhang,
    mathang,
    nganhhang,
    phanquyen,
    taikhoan,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
