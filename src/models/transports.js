module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Transports', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    gosno: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

  })
}
