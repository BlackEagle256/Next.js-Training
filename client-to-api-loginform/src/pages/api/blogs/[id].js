export default function handler(req, res) {
    const {
        query: { id },
        method,
    } = req;

    switch (method) {
        case "GET":
            res.status(200).json({ message: `Get Blog With id: ${id}` })
            break;

        case "PUT":
            res.status(201).json({ message: `PUT Blog With id: ${id}` })
            break;

        case "DELETE":
            res.status(200).json({ message: `DELETE Blog With id: ${id}` })
            break;

        default:
            res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
            res.status(405).end(`Method ${method} Not Allowed`)

    }
}
