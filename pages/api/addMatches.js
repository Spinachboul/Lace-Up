import prisma from '../../prisma/lib/client'

export default async function addMatches(req, res) {
    if(req.method !== 'POST'){
        return res.status(405).json({error: 'Method not allowed'});
    }
    const {userId, game, venue, time, betFor, maxPlayers } = req.body;
    try {
        const match = await prisma.match.create({
            data: {
                userId,
                game,
                venue,
                time,
                betFor,
                maxPlayers,
            },
        });
        res.status(201).json({message: "Match added successfully", match});
    } catch (error) {
        console.error('Error creating match:', error);
        res.status(500).json({ error: 'Failed to create match' });
    }
}
