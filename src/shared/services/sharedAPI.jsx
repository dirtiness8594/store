import { fetchData } from '../../api'

// shared/services/sharedAPI.jsx


export const getHeaderData = async () => {
  try {
      const data = await fetchData('header');
      return data || [];
  } catch (error) {
      console.error('Error fetching sections:', error);
      throw error;
  }
};


export const getFooterData = async () => {
  try {
      const data = await fetchData('footer');
      return data || [];
  } catch (error) {
      console.error('Error fetching sections:', error);
      throw error;
  }
};  