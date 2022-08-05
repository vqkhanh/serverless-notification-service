import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-east-1" });

async function sendMail(event, context) {
  const params = {
    Source: "vqkhanh2009@gmail.com",
    Destination: {
      ToAddresses: ["vqkhanh2009@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello from khanh",
        },
      },
      Subject: {
        Data: "Test mail",
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const handler = sendMail;
