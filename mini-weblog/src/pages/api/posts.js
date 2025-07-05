let posts = [
    { id: 1, title: "First Blog", body: "Body of First Blog" },
    { id: 2, title: "Second Blog", body: "Body of Second Blog" },
    { id: 3, title: "Third Blog", body: "Body of Third Blog" },
]

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(posts);
    } else if (req.method === "POST") {
        const { title, body } = req.body;
        const newPost = {
            id: Date.now(),
            title,
            body,
        };
        posts.push(newPost);
        res.status(201).json(newPost);
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
