import prisma from '../../prisma/lib/client'

export default async function handler(req, res){
    try{
        const match = await prisma.match.findMany();
        const user = await prisma.match.findMany();

        return res.status(200).json({message: 'Successfully fetched', user, match});
    }
    catch(err){
        return res.status(500).json({error: "Internal server error "})
    }
}