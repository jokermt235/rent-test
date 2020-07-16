module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Stats', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false
    },
    week: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: false
    }
  })
}
