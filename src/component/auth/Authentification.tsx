import db from './firebaseConfig'; // Import the Firestore instance
import { collection, getDocs } from 'firebase/firestore'; 

// ... your component code

// Example: Fetching data from Firestore
const fetchData = async () => {
    const usersRef = collection(db, 'flashcard');
    const usersSnapshot = await getDocs(usersRef);
    const usersData = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    // ... process usersData
    console.log("usersData",usersData)
  };
  