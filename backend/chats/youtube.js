// usa googleapis para buscar chat por polling (modo simples)

import google from 'googleapis';
const youtube = google.youtube_v3;

let pollInterval = 4000; // ms


export default {
    start: (onMessage) => {
        const apiKey = process.env.YOUTUBE_API_KEY;
        const liveChatId = process.env.YOUTUBE_LIVECHAT_ID; // deve ser o liveChatId da live


        if (!apiKey || !liveChatId) {
            console.warn('YouTube: API_KEY ou LIVECHAT_ID não informados. Modo de polling desativado.');
            return;
        }


        let nextPageToken = null;


        async function poll() {
            try {
                const res = await youtube.liveChatMessages.list({
                    auth: apiKey,
                    liveChatId: liveChatId,
                    part: 'id,snippet,authorDetails',
                    pageToken: nextPageToken
                });


                nextPageToken = res.data.nextPageToken || null;


                const items = res.data.items || [];
                items.forEach(item => {
                    onMessage({ channel: liveChatId, user: item.authorDetails.displayName, message: item.snippet.displayMessage });
                });
            } catch (err) {
                console.warn('YouTube polling error', err.message || err);
            } finally {
                setTimeout(poll, pollInterval);
            }
        }


        poll();
    }
};