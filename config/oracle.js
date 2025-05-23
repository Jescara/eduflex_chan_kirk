import 'dotenv/config';

async function insertUser(user) {
  try {
    const url = `${process.env.ORDS_BASE_URL}/users/`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${process.env.ORDS_USER}:${process.env.ORDS_PASSWORD}`).toString('base64')
      },
      body: JSON.stringify({
        user_id: user.user_id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role
      })
    });

    const text = await res.text();
    console.log("🔍 Raw ORDS response:", text);

    // Try to parse as JSON only if it's valid
    let data;
    try {
      data = JSON.parse(text);
      console.log("✅ User inserted via ORDS:", data);
    } catch (jsonErr) {
      console.error("❌ ORDS returned non-JSON response (likely HTML error):", text);
    }
  } catch (err) {
    console.error("❌ Failed to insert user via ORDS:", err);
  }
}

export default insertUser;


// import 'dotenv/config';

// async function insertUser(user) {
//   try {
//     const url = `${process.env.ORDS_BASE_URL}/users/`;

//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + Buffer.from(`${process.env.ORDS_USER}:${process.env.ORDS_PASSWORD}`).toString('base64')
//       },
//       body: JSON.stringify({
//         user_id: user.user_id,
//         first_name: user.first_name,
//         last_name: user.last_name,
//         email: user.email,
//         role: user.role
//       })
//     });

//     const text = await res.text(); // For debugging HTML responses
//     console.log("🔍 Raw ORDS response:", text);

//     const data = JSON.parse(text);
//     console.log("✅ User inserted via ORDS:", data);
//   } catch (err) {
//     console.error("❌ Failed to insert user via ORDS:", err);
//   }
// }

// export default insertUser;

// import 'dotenv/config';

// async function insertUser(user) {
//   try {
//     const auth = Buffer.from(`${process.env.ORDS_USER}:${process.env.ORDS_PASSWORD}`).toString('base64');

//     const url = `${process.env.ORDS_BASE_URL}/users/`; // Must be set in .env

//     const res = await fetch(url, {
//       method: 'POST',
//       headers: {
//   'Content-Type': 'application/json',
//   'Authorization': 'Basic ' + Buffer.from(`${process.env.ORDS_USER}:${process.env.ORDS_PASSWORD}`).toString('base64')

//       },
//       body: JSON.stringify({
//         user_id: user.user_id,
//         first_name: user.first_name,
//         last_name: user.last_name,
//         email: user.email,
//         role: user.role
//       })
//     });

//     const data = await res.json();
//     console.log("✅ User inserted via ORDS:", data);
//   } catch (err) {
//     console.error("❌ Failed to insert user via ORDS:", err);
//   }
// }

// export default insertUser;


// import 'dotenv/config';

// async function insertUser(user) {
//   try {
//     const url = `https://ga275da85c7b8a2-eduflexmain.adb.us-chicago-1.oraclecloudapps.com/ords/${process.env.ORDS_USER}/_sdw/users/`;
//     const res = await fetch(`${process.env.ORDS_BASE_URL}/users/`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//        headers: {
//   'Content-Type': 'application/json',
//   'Authorization': 'Basic ' + Buffer.from(`${ORDS_USER}:${ORDS_PASSWORD}`).toString('base64')
// }

//       },
//       body: JSON.stringify({
//         user_id: user.user_id,
//         first_name: user.first_name,
//         last_name: user.last_name,
//         email: user.email,
//         role: user.role
//       })
//     });

//     const data = await res.json();
//     console.log("✅ User inserted via ORDS:", data);
//   } catch (err) {
//     console.error("❌ Failed to insert user via ORDS:", err);
//   }
// }

// export default insertUser;


// // // import pkg from 'oracledb';
// // // const { initOracleClient, getConnection } = pkg;
// // import 'dotenv/config';
// // import path from 'path';

// // // console.log("🔍 Oracle Wallet Path:", path.join(process.cwd(), 'wallet'));

// // // TEMP: Stubbed insertUser function
// // async function insertUser(user) {
// //   console.log("⚠️ insertUser() called but Oracle DB is disabled on this deployment.");
// //   // You can log the user data to verify
// //   console.log("User data:", user);
// // }

// // export default insertUser;



// // import pkg from 'oracledb';
// // const { initOracleClient, getConnection } = pkg;
// // import 'dotenv/config';
// // import path from 'path';

// // // For Wallet-based connection
// // initOracleClient({
// //   configDir: path.join(process.cwd(), 'wallet') 
// // });

// // async function insertUser(user) {
// //   try {
// //     const connection = await getConnection({
// //       user: process.env.ORACLE_USER,
// //       password: process.env.ORACLE_PASSWORD,
// //       connectString: process.env.ORACLE_CONNECT
// //     });

// //     await connection.execute(
// //       `INSERT INTO users (user_id, first_name, last_name, email, role)
// //        VALUES (:id, :fname, :lname, :email, :role)`,
// //       {
// //         id: user.user_id,
// //         fname: user.first_name,
// //         lname: user.last_name,
// //         email: user.email,
// //         role: user.role
// //       },
// //       { autoCommit: true }
// //     );

// //     console.log("✅ User inserted into Oracle DB");
// //     await connection.close();
// //   } catch (err) {
// //     console.error("❌ Oracle DB connection error:", err);
// //   }
// // }
// // console.log("🔍 Oracle Wallet Path:", path.join(process.cwd(), 'wallet'));

// // export default insertUser;
