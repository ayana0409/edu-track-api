import { OAuth2Client } from "google-auth-library";
import { env } from "../configs/env";

const client = new OAuth2Client(env.GOOGLE_CLIENT_ID);

export const verifyGoogleToken = async (idToken: string) => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw new Error("Invalid Google token");
  }

  return {
    googleId: payload.sub,
    email: payload.email,
    name: payload.name,
    avatar: payload.picture,
  };
};
