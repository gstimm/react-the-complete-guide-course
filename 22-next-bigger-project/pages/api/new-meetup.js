import { MongoClient } from 'mongodb';

const handler = async (request, response) => {
  if (request.method === 'POST') {
    const data = request.body;

    const client = await MongoClient.connect(
      'mongodb+srv://timm:1OHBNaU7OXPlEZOi@cluster0.9vmy3.mongodb.net/meetups?retryWrites=true&w=majority'
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    response.status(201).json({ message: 'Meetup Inserted!' });
  }
};

export default handler;
