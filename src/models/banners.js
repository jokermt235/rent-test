module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Banners', {
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
    descEN: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    goodId: {
        type: DataTypes.INTEGER,
        allowNull:true
    },
  })
}
