import { NextApiRequest, NextApiResponse } from 'next';
import connection from "../../services/database";
 

export async function getData(req: NextApiRequest, res: NextApiResponse) {
    try {
      // Perform a database query to fetch data
      const [rows, fields] = await connection.query('SELECT * FROM users');
  
      // Respond with the fetched data
      res.status(200).json({ data: rows });
    } catch (error: any) {
      console.error('Error executing database query:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
 
export   async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      // Handle POST request
      // Assuming you might want to access data from the request body
      const { fullName, phoneNumber, email, isAdmin } = req.body;

      // Perform a database query to insert data
      const [result] = await connection.query('INSERT INTO users (fullName, phoneNumber, email, isAdmin) VALUES (?, ?, ?, ?)', [fullName, phoneNumber, email, isAdmin]);

      // Respond with the result
      res.status(201).json({ message: 'Data successfully inserted', result });
    } else {
      // Respond with an error for unsupported methods
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error:any) {
    console.error('Error executing database query:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
