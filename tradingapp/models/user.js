// models/user.js
import { DataTypes } from 'sequelize';
import sequelize from '../db';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: DataTypes.STRING,
});

export default User;

  