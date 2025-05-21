import { patchData } from "../../../api";


export const updateCartItems = async (uid, items) => {
    if (!uid || !Array.isArray(items)) return;
    return await patchData(`carts/${uid}`, { items });
  };