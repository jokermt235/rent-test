module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Photos', {
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
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false
    }
  })
}
