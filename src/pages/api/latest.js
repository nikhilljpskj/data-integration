import { latestPayload } from './webhook';

export default function handler(req, res) {
  res.status(200).json({ latest: latestPayload });
}
