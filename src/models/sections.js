module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Sections', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    titleEN: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    descEN: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    descRU: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    descKG: {
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
