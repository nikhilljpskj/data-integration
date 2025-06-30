import fetch from 'node-fetch';

let latestPayload = null; // in-memory storage

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const data = req.body;
  latestPayload = data; // store latest

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

// Export latestPayload for other routes
export { latestPayload };
