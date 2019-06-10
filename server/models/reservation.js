'use strict';
module.exports = ( sequelize, DataTypes ) => {
  const Reservation = sequelize.define( 'Reservation', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    stay: DataTypes.STRING,
    city: DataTypes.STRING,
    guests: DataTypes.INTEGER,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
  }, {} );
  Reservation.associate = function( models ) {
    // associations can be defined here
  };
  return Reservation;
};