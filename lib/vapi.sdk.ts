import Vapi from "@vapi-ai/web";

//const vapi = new Vapi("your-public-key-or-jwt");

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!)