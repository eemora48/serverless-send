import boto3

ses = boto3.client('ses')

def lambda_handler(event, context):
    ses.send_email(
        Source='ilyerick8@gmail.com',
        Destination={
            'ToAddresses': [
                event['destinationEmail'],
                ]
        },
        Message={
            'Subject': {
                'Data' : 'Cloud Project 2'
            },
            'Body' : {
                'Text' : {
                    'Data' : event['message']
                }
            }
        }
    )
    return 'Email sent!'