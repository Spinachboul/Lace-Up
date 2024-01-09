import prisma from '../../prisma/lib/client';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email,
        fullName,
        address,
        phoneNumber,
        favouriteSports,
        rating
    } = req.body;
    console.log({ email, fullName, address, phoneNumber, favouriteSports, rating})
    const slayPoints = 0;
    try {
        const updatedUser = await prisma.user.update({
            where: { email },
            data: {
                fullName,
                address,
                phoneNumber,
                favouriteSports,
                rating,
                slayPoints
            },
        });
        console.log({
            fullName,
            address,
            phoneNumber,
            favouriteSports,
            rating,
            slayPoints
        })
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
