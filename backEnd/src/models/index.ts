import { sequelize } from '../config/database';
import { UserModel } from './User';
import { TripModel } from './Trip';
import { UserTripModel } from './UserTrip';
import { PlanningItemModel } from './PlanningItem';
import { DocumentModel } from './Document';

const User = UserModel(sequelize);
const Trip = TripModel(sequelize);
const UserTrip = UserTripModel(sequelize);
const PlanningItem = PlanningItemModel(sequelize);
const Document = DocumentModel(sequelize);

// ✅ Associations
User.belongsToMany(Trip, { through: UserTrip, foreignKey: 'userId' });
Trip.belongsToMany(User, { through: UserTrip, foreignKey: 'tripId' });

// ✅ Indispensable pour inclure UserTrip directement :
Trip.hasMany(UserTrip, { foreignKey: 'tripId' });
UserTrip.belongsTo(Trip, { foreignKey: 'tripId' });

User.hasMany(UserTrip, { foreignKey: 'userId' });
UserTrip.belongsTo(User, { foreignKey: 'userId' });

Trip.hasMany(PlanningItem, { foreignKey: 'tripId' });
PlanningItem.belongsTo(Trip, { foreignKey: 'tripId' });

PlanningItem.hasMany(Document, {
    foreignKey: 'planningId',
    as: 'documents',
    onDelete: 'CASCADE',
});
Document.belongsTo(PlanningItem, {
    foreignKey: 'planningId',
    as: 'planning',
});

export { sequelize, User, Trip, UserTrip, PlanningItem, Document };
