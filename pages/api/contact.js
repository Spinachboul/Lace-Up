import prisma from '../../prisma/lib/client'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        try {
            const contact = await prisma.contact.create({
                data: {
                    name,
                    email,
                    message,
                },
            });
            console.log('Message sent:', contact);
            res.status(200).json({ message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error sending message:', error);
            res.status(500).json({ message: 'An error occurred while sending the message' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
