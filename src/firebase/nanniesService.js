import { getDatabase, ref, get } from "firebase/database";
import {app} from "./config";

export const getNannyData = async () => {
  const database = getDatabase(app);
    //   const nannyRef = ref(database, `nannies/${nannyId}`);
  const nannyRef = ref(database, `nannies/25`);
    

  try {
    const snapshot = await get(nannyRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("Няні не знайдено в базі даних Firebase");
      return null;
    }
  } catch (error) {
    console.error("Помилка отримання даних з Firebase:", error);
    return null;
  }
};
