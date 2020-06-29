module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Adverts', {
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
    }
  })
}
