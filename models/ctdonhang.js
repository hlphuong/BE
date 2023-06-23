const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctdonhang', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_hang: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'mathang',
        key: 'ID'
      }
    },
    id_donhang: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'donhang',
        key: 'id'
      }
    },
    soluong: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tongtien: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ctdonhang',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_hang",
        using: "BTREE",
        fields: [
          { name: "id_hang" },
        ]
      },
      {
        name: "id_donhang",
        using: "BTREE",
        fields: [
          { name: "id_donhang" },
        ]
      },
    ]
  });
};
