import { pusher } from "../../../lib/pusher";

export default async function handler(req, res) {
  const { message, username, userLocation } = req.body;
  await pusher.trigger("presence-channel", "chat-update", {
    message,
    username,
    userLocation
  });

  res.json({ status: 200 });
}
