import { getDatabase, ref, get } from "firebase/database";
import {app} from "./config";

export const getMoreNanniesData = async (start, limit) => {
  const database = getDatabase(app);
  const nanniesRef = ref(database, "nannies");

  try {
    const snapshot = await get(nanniesRef);
    if (snapshot.exists()) {
      const nanniesArray = [];
      snapshot.forEach((childSnapshot) => {
        nanniesArray.push(childSnapshot.val());
      });

      const end = start + limit;

      return nanniesArray.slice(start, end);
    } else {
      console.log("Няні не знайдено в базі даних Firebase");
      return null;
    }
  } catch (error) {
    console.error("Помилка отримання даних з Firebase:", error);
    return null;
  }
};