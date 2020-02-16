// import * as firebase from "firebase/app";
// import "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
// const firebaseConfig = {
//   apiKey: "AIzaSyCjdftXLYlmsOLMN9nCrSVPbOSvTBcbImw",
//   authDomain: "flytbase-mission.firebaseapp.com",
//   databaseURL: "https://flytbase-mission.firebaseio.com",
//   projectId: "flytbase-mission",
//   storageBucket: "flytbase-mission.appspot.com",
//   messagingSenderId: "643898009691",
//   appId: "1:643898009691:web:b1c56cc4b6a4a84658377e"
// };

// Initialize Firebase

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "John Doe" }));
};
