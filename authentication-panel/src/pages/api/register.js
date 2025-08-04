import db from "../../lib/db";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const { fullname, username, password } = req.body;

    if (!fullname || !username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
    }

    try {
        const [result] = await db.execute(
            "INSERT INTO users (fullname,username, password) VALUES (? ,? , ?)",
            [fullname, username, password]
        );

        return res.status(200).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}
