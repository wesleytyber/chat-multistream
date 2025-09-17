import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default {
  sendMessage: async (channelId, text) => {
    const token = process.env.KICK_TOKEN;
    if (!token) return null;
    try {
      const res = await axios.post(
        `https://kick.com/api/v1/chat/${channelId}/send`,
        { text },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    } catch (err) {
      console.warn('Kick send message error', err?.response?.data || err.message);
      return null;
    }
  }
};
