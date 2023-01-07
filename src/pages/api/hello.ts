// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

export default function handler<NextApiHandler>(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ name: "John Doe" });
}
