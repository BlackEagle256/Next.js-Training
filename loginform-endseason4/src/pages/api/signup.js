const users = [];

export default function handler(req, res) {
    const { method } = req;

    if (method === "POST") {
        const { email, username, password } = req.body;

        if (!email || !username || !password) {
            res.status(400).json({ message: "Some Required Field Not Completed" })
        }

        const exist = users.find((user) => {
            user.email === email;
        })

        if (exist) {
            return res.status(409).json({ error: "USER IS EXIST" })
        }

        users.push({ username, email, password });

        return res.status(201).json({ message: "User Created Successful", users })
    }

    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${method} is Not Allowed!!!`)
}