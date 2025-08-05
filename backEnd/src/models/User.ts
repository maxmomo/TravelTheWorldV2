import { DataTypes, Sequelize } from 'sequelize';

export const UserModel = (sequelize: Sequelize) => {
  return sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER.UNSIGNED, 
      autoIncrement: true, 
      primaryKey: true 
    },
    username: { 
      type: DataTypes.STRING, 
      allowNull: false
    },
    email: { 
      type: DataTypes.STRING, 
      allowNull: false
    },
    password: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
  }, {
    tableName: 'users',
    timestamps: false,
  });
};
