import { DataTypes, Sequelize } from 'sequelize';

export const PlanningItemModel = (sequelize: Sequelize) => {
    return sequelize.define('PlanningItem', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        tripId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('hebergement', 'transport', 'activity'),
            allowNull: false,
        },
        transportMode: {
            type: DataTypes.ENUM('avion', 'train', 'bus', 'voiture', 'taxi', 'uber', 'ferry', 'velo', 'pied'),
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        booked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        departureCity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        arrivalCity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        tableName: 'planning_items',
        timestamps: false,
    });
};