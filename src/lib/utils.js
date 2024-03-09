import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { InvokeCommand, LambdaClient, LogType } from "@aws-sdk/client-lambda";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const invoke = async (payload) => {
  const lambdaName = "elasticsearch";
  const config = {
    region: "us-west-2",

    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  };

  const client = new LambdaClient(config);
  const command = new InvokeCommand({
    FunctionName: lambdaName,
    Payload: JSON.stringify(payload),
    LogType: LogType.Tail,
  });
  try {
    const { Payload, LogResult } = await client.send(command);
    const result = Buffer.from(Payload).toString();
    const logs = Buffer.from(LogResult, "base64").toString();
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { invoke };
