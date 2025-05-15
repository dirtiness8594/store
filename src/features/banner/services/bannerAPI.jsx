import { fetchData } from '../../../api' // ajuste o path conforme seu projeto

/**
 * Fetches banner details from Firebase based on an array of IDs.
 *
 * @param {Array<number>} ids - List of banner IDs to fetch.
 * @returns {Promise<Array<Object>>} - Array of banner objects.
 */
export const getBannersByIds = async (ids = []) => {
  try {
    if (!ids.length) return [];

    // Fetch all banner data in parallel
    const bannerPromises = ids.map(id => fetchData(`banners/${id}`)); // Supondo estrutura: /banners/:id

    const banners = await Promise.all(bannerPromises);

    return banners.filter(Boolean); // Filtra possíveis nulos/undefined
  } catch (error) {
    console.error('Error fetching banners by IDs:', error);
    throw error;
  }
};
