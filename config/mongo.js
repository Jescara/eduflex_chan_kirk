import { MongoClient } from 'mongodb';
import 'dotenv/config';

const client = new MongoClient(process.env.MONGO_URI);
const dbName = 'edutestflex';

let db;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    console.log("✅ MongoDB Connected");
    db = client.db(dbName);
  }
  return db;
}

async function getCourseContent(courseId) {
  const db = await connectToDatabase(); // ✅ Reuse connection
  const collection = db.collection('course_content');

  const numericId = parseInt(courseId, 10); // 👈 Ensure number
  return await collection.find({ course_id: numericId }).toArray();
}

export { getCourseContent };




// import { MongoClient } from 'mongodb';
// import 'dotenv/config';

// const client = new MongoClient(process.env.MONGO_URI);
// const dbName = 'edutestflex';

// async function getCourseContent(courseId) {
//   await client.connect();
//   console.log("mongoDB Connection Successful");
//   const db = client.db(dbName);
//   const collection = db.collection('course_content');
//   return await collection.find({ course_id: courseId }).toArray();
// }

// const _getCourseContent = getCourseContent;
// export { _getCourseContent as getCourseContent };
