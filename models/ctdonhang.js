const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctdonhang', {
    id_hang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'mathang',
        key: 'ID'
      }
    },
    soluong: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_donhang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'donhang',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'ctdonhang',
    timestamps: false,
    indexes: [
      {
        name: "ctdonhang_ibfk_2",
        using: "BTREE",
        fields: [
          { name: "id_hang" },
        ]
      },
      {
        name: "ctdonhang_ibfk_3",
        using: "BTREE",
        fields: [
          { name: "id_donhang" },
        ]
      },
    ]
  });
};
