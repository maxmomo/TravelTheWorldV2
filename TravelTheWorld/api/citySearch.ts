// api/citySearch.ts
import axios from 'axios';

const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

export const searchCities = async (query: string): Promise<{ id: string; label: string }[]> => {
    if (!query) return [];

    try {
        const response = await axios.get(API_URL, {
            params: {
                namePrefix: query,
                limit: 5,
                sort: '-population',
                languageCode: 'fr',
            },
            headers: {
                'X-RapidAPI-Key': 'a511c8be47mshbc02dd24711f13fp170c75jsn30a5df0fa1ee',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
            },
        });

        return response.data.data.map((city: any) => ({
            id: city.id,
            label: `${city.city}, ${city.countryCode}`,
        }));

    } catch (error) {
        console.error('Erreur recherche ville :', error);
        return [];
    }
};