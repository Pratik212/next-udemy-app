import React from 'react';
import {connectDatabase, insertDocument, getAllDocuments} from '../../../helpers/db-util'

async function handler (req, res) {
        const eventId = req.query;
        let client;
        try {
            client =await connectDatabase();
        }catch (e) {
            res.status(500).json({message: 'Connecting to the database failed!'})
            return;
        }

        if (req.method === "POST") {
            const {email, name, text} = req.body

            if (!email.includes("@") || !name || name.trim() === ''|| !text || text.trim() === ''){
                res.status(422).json({message : "Invalid input"})
                await client.close();
                return;
            }

            const newComment = {
                email,
                name,
                text,
                eventId
            }

            let result;
            try {
                 result = await insertDocument(client, 'comments', newComment);
                newComment._id = result.insertedId
                res.status(201).json({message : "Added comment"})
            } catch (e) {
                res.status(500).json({message: "Inserting comment failed!"})
            }



            await client.close()
        }

        if (req.method === "GET") {
            let documents;
            try {
                documents = await getAllDocuments(client, 'comments', {_id: -1}, {eventId: eventId});
                res.status(200).json({comments: documents, message: 'Getting comments failed.'})
            }catch (e) {
                res.status(500).json({message: 'Getting comments failed.'})
                return
            }

            await client.close();

            res.status(200).json({ comments: documents});
        }
};

export default handler;