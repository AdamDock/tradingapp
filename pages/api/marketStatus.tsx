import type { NextApiRequest, NextApiResponse } from 'next';
import { viewHolidays } from '../../controllers/holiday';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const event = await viewHolidays(req, res);
    res.status(200).json(event);
  } catch (error) {
    console.error('Error creating subscriber:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}