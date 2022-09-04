import { db } from "./firebase-config";
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";

// export async function getUser(){
//     const docRef = doc(db,'QuizGamesTop','1');
//     const res = await getDoc(docRef);
//     console.log( res );
// }

export async function getUser() {
  const citiesRef = collection(db, "QuizGamesTop");
  const snapshot = await citiesRef.get();
  //   snapshot.forEach((data) => {
  //     console.log(data.id, "=>", data.data());
  //   });
}

export async function insertNewTop(newTop) {
  try {
    const collectionRef = collection(db, "QuizGamesTop");
    const docRef = doc(collectionRef, newTop.top);
    const resp = await setDoc(docRef, newTop);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}
