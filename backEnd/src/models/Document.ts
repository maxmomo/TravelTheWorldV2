import { DataTypes, Sequelize } from 'sequelize';

export const DocumentModel = (sequelize: Sequelize) => {
    return sequelize.define('Document', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        planningId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fileKey: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        tableName: 'documents',
        timestamps: true,
    });
};
