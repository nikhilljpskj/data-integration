import fetch from 'node-fetch';

export const config = {
  api: {
    bodyParser: true,
  },
};

let latestPayload = null;

export default async function handler(req, res) {
  // Allow all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const data = req.body;
  latestPayload = data;

  try {
    const forwardRes = await fetch("http://nikhiljp.42web.io/data-receiving/save.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await forwardRes.json();
    return res.status(200).json({ status: 'forwarded', result });
  } catch (err) {
    return res.status(500).json({ error: 'Forwarding failed', details: err.message });
  }
}

export { latestPayload };
