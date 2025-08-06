import { DataTypes, Sequelize } from 'sequelize';

export const UserTripModel = (sequelize: Sequelize) => {
  return sequelize.define('UserTrip', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    tripId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'invite'
    }
  }, {
    tableName: 'user_trips',
    timestamps: false,
  });
};