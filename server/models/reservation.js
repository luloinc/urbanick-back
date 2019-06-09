'use strict';
module.exports = ( sequelize, DataTypes ) => {
  const Reservation = sequelize.define( 'Reservation', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {} );
  Reservation.associate = function( models ) {
    // associations can be defined here
  };
  return Reservation;
};