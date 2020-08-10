module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Links', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titleRU: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    titleKG: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    titleEN: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  })
}
