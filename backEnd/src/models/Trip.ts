import { DataTypes, Sequelize } from 'sequelize';

export const TripModel = (sequelize: Sequelize) => {
  return sequelize.define('Trip', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING, 
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    adults: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 1
    },
    children: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0
    },
    key: {
      type: DataTypes.STRING
    },
  }, {
    tableName: 'trips',
    timestamps: false,
  });
};