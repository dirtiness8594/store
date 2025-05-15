




import { fetchData } from '../../../api';

/**
 * Fetches full product data for a list of product IDs.
 * @param {number[]} ids - Array of product IDs
 * @returns {Promise<object[]>} - Array of product objects
 */
export const getProductsByIds = async (ids) => {
  try {
    if (!ids || !ids.length) return [];
    
    console.log("CIS ", ids)

    // Assume que o endpoint de produto seja algo como /products/{id}
    const productPromises = ids.map(id => fetchData(`products/${id}`));

    const products = await Promise.all(productPromises);
    return products.filter(Boolean); // Remove undefined/null se houver falha em alguma
  } catch (error) {
    console.error('Error fetching products by IDs:', error);
    throw error;
  }
};

