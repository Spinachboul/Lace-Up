import prisma from '../../../prisma/lib/client';

export default async function handler(req, res) {
    const { id } = req.query;
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
            include: {
                matches: true
            },
        });

        if (user) {
            return res.status(200).json({ message: 'Got the user details successfully', user });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
