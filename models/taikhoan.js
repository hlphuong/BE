const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('taikhoan', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'phanquyen',
        key: 'id'
      }
    },
    matkhau: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    avar: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'taikhoan',
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
        name: "role",
        using: "BTREE",
        fields: [
          { name: "role" },
        ]
      },
    ]
  });
};
