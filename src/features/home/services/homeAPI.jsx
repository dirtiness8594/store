import { fetchData } from '../../../api';


/*
    All Content, w/ ID's

    section {
        order: number
        type: banner || shelf
        name: title
        className: className
        classNameSons: classNameSons
        showName: true || false
        carousel: true || false
        itens: image || products -- both as ID list 
    }
*/


export const getHomeSections = async () => {
    try {
        const data = await fetchData('sections');
        return data.sections || data || [];
    } catch (error) {
        console.error('Erro ao buscar seções:', error);
        throw error;
    }
};
