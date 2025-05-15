import { fetchData } from '../../../api';

/**
 * Fetches home sections from Firebase.
 *
 * Expected structure for each section:
 * 
 * section {
 *   order: number               // Display order on the homepage
 *   type: number                // Section type (e.g., 2 = banner, 3 = shelf, etc.)
 *   name: string                // Title of the section (shown if showName === 1)
 *   className: string           // Main CSS class
 *   classNameSons: string       // CSS class for child elements (e.g., product cards)
 *   showName: 0 | 1             // Whether to show the section title
 *   slide: 0 | 1                // Whether the section should behave as a carousel
 *   items: number[]             // List of item IDs (can be image or product references)
 * }
 */

export const getSections = async () => {
    try {
        const data = await fetchData('sections');
        return data.sections || data || [];
    } catch (error) {
        console.error('Error fetching sections:', error);
        throw error;
    }
};
