const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('donhang', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    id_KH: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'khachhang',
        key: 'id'
      }
    },
    id_NV: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'taikhoan',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'donhang',
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
        name: "id_KH",
        using: "BTREE",
        fields: [
          { name: "id_KH" },
        ]
      },
      {
        name: "id_NV",
        using: "BTREE",
        fields: [
          { name: "id_NV" },
        ]
      },
    ]
  });
};
