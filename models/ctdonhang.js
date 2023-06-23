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
        key: 'id'
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
        name: "fk_ctdonhang_1_idx",
        using: "BTREE",
        fields: [
          { name: "id_donhang" },
        ]
      },
      {
        name: "fk_ctdonhang_2_idx",
        using: "BTREE",
        fields: [
          { name: "id_hang" },
        ]
      },
    ]
  });
};
