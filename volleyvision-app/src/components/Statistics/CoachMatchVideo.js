import * as React from "react";
import ReactPlayer from "react-player";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { useParams } from "react-router";

export default function ColumnGroupingTable() {
  const { playerId, matchId } = useParams();
  const [currURL, setCurrURL] = React.useState("");

  React.useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const currUser = auth.currentUser;
    const path = `users/${playerId}/matches`;
    const matchesRef = doc(db, path, matchId);

    getDoc(matchesRef).then((snapshot) => {
      const fireData = snapshot.data();
      setCurrURL(fireData.videoURL);
    });
  });

  return <ReactPlayer url={currURL} width="800px" height="440px" />;
}
