import { collection, addDoc, getDocs, query, where, DocumentData } from "firebase/firestore";
import { db } from "@/firebase";

export const addToWaitlist = async (name: string, email: string) => {
  try {
    // Check if user already exists
    const q = query(collection(db, "waitlist"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      console.log("User already exists in waitlist"); // Add this line
      return { success: false, error: 'already-exists' };
    }

    // Add new user to waitlist
    const docRef = await addDoc(collection(db, "waitlist"), {
      name,
      email,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return { success: true };
  } catch (e) {
    console.error("Error adding document: ", e);
    return { success: false, error: 'unknown' };
  }
};

export const getWaitlistUsers = async () => {
  interface WaitlistUser {
    id: string;
    [key: string]: any;
  }
  const waitlistUsers: WaitlistUser[] = [];
  const querySnapshot = await getDocs(collection(db, "waitlist"));
  querySnapshot.forEach((doc) => {
    waitlistUsers.push({ id: doc.id, ...doc.data() as DocumentData });
  });
  return waitlistUsers;
};