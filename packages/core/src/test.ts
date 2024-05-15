import { Resource } from "sst";

export const handler = async () => {
  const test = Resource.MySecret.value;
  console.log(test);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Turbo Nub!",
    }),
  };
};
