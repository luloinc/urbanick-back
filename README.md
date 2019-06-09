# urbanick-back

For initialization claudia for AWS lambda deployment
claudia generate-serverless-express-proxy --express-module app

For first loading to AWS lambda
claudia create --handler lambda.handler --deploy-proxy-api --region us-east-1

For AWS lambda updating
claudia update

Endpoint
https://vbmc1istu3.execute-api.us-east-1.amazonaws.com/latest/api/reservation

body
{
	"firstName": "Sergio",
	"lastName": "Ramirez",
	"email": "sergiorb@luloinc.co"
}