import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pathToFile = path.join(process.cwd(), '/data', '/companies-100.json');
  const data = await fs.readFileSync(pathToFile, 'utf8');
  let jsonData = JSON.parse(data);

  res.json(jsonData);
}
