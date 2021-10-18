module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Plans', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
  })
}
