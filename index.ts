import { GetFunctionCommand, LambdaClient } from "@aws-sdk/client-lambda";
import enquirer from "enquirer";

async function askQuestion() {
  const answer = await enquirer.prompt({
    name: "answer",
    type: "confirm",
    message: "Do you want to continue?",
  });
  console.log('answer', answer)
}

async function getLambda() {
  try {
    await new LambdaClient({ region: "eu-west-1" }).send(new GetFunctionCommand({ FunctionName: 'test' }),);
  } catch (e) {
    //this will error, but it still causes the issue
    console.error('error running GetFunctionCommand')
  }
}

async function crashes() {
  //comment out either of these lines and it no longer crashes
  await askQuestion()
  await getLambda()

  await askQuestion() //crashes
}

await crashes().catch(e => console.error(e))

