module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Reviews', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: false
    },
    show: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
  })
}