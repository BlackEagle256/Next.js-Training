export default function handlere(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All Fields Are Required" })
        }
        console.log("Form Created")
        console.log("name: ", name)
        console.log("email: ", email)
        console.log("message: ", message)

        return res.status(201).json({ message: "Form Created Successful" })
    }
    else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} is Not Allowed`)
    }
}
