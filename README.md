# urbanick-back

### For initialization claudia for AWS lambda deployment
claudia generate-serverless-express-proxy --express-module app

### For first loading to AWS lambda
claudia create --handler lambda.handler --deploy-proxy-api --region us-east-1

### For AWS lambda updating
claudia update

### Endpoint
https://xxx.execute-api.us-east-1.amazonaws.com/latest/api/reservation

### body
{
	"firstName": "XXX",
	"lastName": "XXX",
	"email": "xxx@xxx.xx"
}