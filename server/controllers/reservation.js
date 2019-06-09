var AWS = require( "aws-sdk" );

AWS.config.update( { region: 'us-east-1' } );
var ses = new AWS.SES( { apiVersion: '2010-12-01' } );

const Reservation = require( "../models" ).Reservation;

module.exports = {
  create( req, res ) {
    return Reservation.create( {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    } )
      .then( item => {
        
        console.log( "Reservation successfully created, sending verification email" );
        
        var bodyMessage = "Hola " + item.firstName + ",<br /> \
          Tu solicitud de reserva se ha creado exitosamente y se encuentra pendiente por verificación.";

        // Create sendEmail params 
        var params = {
          Destination: {
            CcAddresses: [
              'fabiancpl@luloinc.co', // Reservations admin
            ],
            ToAddresses: [ item.email ]
          },
          Message: {
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: bodyMessage
              }
            },
            Subject: {
              Charset: 'UTF-8',
              Data: '[Urbanick] Solicitud de reserva'
            }
          },
          Source: 'luloincco@gmail.com',
          ReplyToAddresses: [],
        };

        // Sending the confirmation message
        ses.sendEmail( params ).promise()
          .then( data => console.log( "Notification email successfully sent: " + data.MessageId ) )
          .catch( err => console.error( err, err.stack ) );

        res
          .status( 201 )
          .send( {
            success: true,
            message: "Reservation successfully created.",
            item
          } )
      } )
      .catch( error => res.status( 400 ).send( error ) );
  }
};