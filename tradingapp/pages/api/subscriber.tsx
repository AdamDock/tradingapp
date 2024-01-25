import type { NextApiRequest, NextApiResponse } from 'next';
import { createSubscriber, getSubscriberCount, getSubscribers } from '../../controllers/subscriber';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST') {
  try {
    await createSubscriber(req, res);
    res.status(200).json({ message: 'Subscriber created successfully' });
  } catch (error) {
    console.error('Error creating subscriber:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
} else if (req.method === 'GET') {
  try {
    const count = await getSubscriberCount(req, res);
    res.status(200).json({ message: `Subscriber count: ${count}` });
  } catch (error) {
    console.error('Error getting subscriber count:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
}
