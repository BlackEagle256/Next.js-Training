export default function handler(req, res) {
    if (req.method === "POST") {
        const { username } = req.body;

        if (!username) return res.status(400).json({ message: "Username Required" })

        res.setHeader("Set-Cookie", `user=${username}; Path=/; HttpOnly`)
        return res.status(200).json({ message: "Logged in!" });
    }

    res.status(405).end();
}