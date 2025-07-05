let posts = [
    { id: 1, title: "First Title", body: "First Body" },
    { id: 1, title: "Second Title", body: "Second Body" },
    { id: 1, title: "Third Title", body: "Third Body" }
]

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(posts)
    }
    else if (req.method === "POST") {
        const { title, body } = req.body;

        const newData = {
            id: Date.now(),
            title,
            body
        };

        posts.push(newData);
        res.status(201).json(newData);
    }
    else {
        res.status(405).json({
            message: "Method Not Allowed"
        })
    }
}