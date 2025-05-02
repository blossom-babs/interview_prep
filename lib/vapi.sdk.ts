import Vapi from "@vapi-ai/web";

//const vapi = new Vapi("your-public-key-or-jwt");

export const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN!)

//f7734966-0d60-4780-9800-65e0214e6ecd