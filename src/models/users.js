module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    planId: {
      type: DataTypes.INTEGER,
    },
    discountId: {
      type: DataTypes.INTEGER,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    roles: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  });
}
