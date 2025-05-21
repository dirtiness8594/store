import { fetchData } from '../../api'

// shared/services/sharedAPI.jsx


export const getHeaderData = async () => {
  try {
      const data = await fetchData('header');
      return data.sections || data || [];
  } catch (error) {
      console.error('Error fetching sections:', error);
      throw error;
  }
};


export const getFooterData = async () => {
  try {
    const response = await fetchData('pages/footer'); // substitua pela rota correta se necessário
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do footer');
    }

    const data = await response.json();
    return data.footer || [];
  } catch (error) {
    console.error('Erro ao buscar footer:', error);
    return [];
  }
};
