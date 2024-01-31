import type { NextApiRequest, NextApiResponse } from 'next';
import { viewCommodities } from '../../controllers/commodity';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const event = await viewCommodities(req, res);
    res.status(200).json(event);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
