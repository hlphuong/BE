const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('khachhang', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sdt: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    diem: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'khachhang',
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
    ]
  });
};
