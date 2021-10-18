module.exports = (sequelize, DataTypes)=>{
  return sequelize.define('Rents', {
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
    carId: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    rentDate:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
    rentEndDate:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }

  })
}
