module.exports = (sequelize, DataTypes)=>{
    return sequelize.define('Contacts', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      fullname: {
          type: DataTypes.STRING,
          allowNull:false
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      msg: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      new: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
      }
    })
  }