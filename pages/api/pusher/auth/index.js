import { pusher } from '../../../../lib/pusher'

export default async function handler( req, res ) {
  const { socket_id, channel_name, username, userLocation } = req.body;
  const randomString = Math.random().toString(36).slice(2);

  const presenceData = {
    user_id: randomString,
    user_info: {
      username: "@" + username,
      userLocation
    },
  };

  try {
    const auth = pusher.authenticate(socket_id, channel_name, presenceData);
    res.send(auth);    
  } catch (error) {
      console.error(error)
  }
  
}

