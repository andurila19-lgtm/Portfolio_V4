export const UMAMI_ACCOUNT = {
  username: "Anduril Ahmad",
  api_key: process.env.UMAMI_API_KEY,
  base_url: "https://api.umami.is/v1/websites",
  endpoint: {
    page_views: "/pageviews",
    sessions: "/sessions/stats",
  },
  parameters: {
    startAt: 1735686000000, // 1 Jan 2025 00:00 WIB
    endAt: new Date().getTime(),
    unit: "month",
    timezone: "Asia/Jakarta",
  },
  is_active: true,
  websites: [
    {
      domain: "anduril.web.id",
      website_id: "cd912b2f-6f76-4633-a28f-93ddd2f841da",
      umami_url:
        "https://cloud.umami.is/share/91c868c5-2a89-4a1d-b292-56c40ea30137/anduril.web.id",
    },
  ],
};
