module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Banners', {
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
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false
    }
  })
}
