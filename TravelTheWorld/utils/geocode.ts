export const OPENCAGE_API_KEY = process.env.EXPO_PUBLIC_OPENCAGE_API_KEY!;

export type AddressDetails = {
  latitude: number;
  longitude: number;
  formatted: string;
  components: Record<string, any>;
};

export const getCoordinatesFromAddress = async (
  rawAddress: string
): Promise<AddressDetails | null> => {
  try {
    let key = 'ebb0e954d6d240519c14c63e89006185'
    const encoded = encodeURIComponent(rawAddress);
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encoded}&key=${key}&language=fr&limit=1`
    );

    if (!response.ok) {
      console.error(`Erreur HTTP ${response.status}`);
      return null;
    }

    const data = await response.json();
    if (!data || !data.results || data.results.length === 0) return null;

    const result = data.results[0];

    return {
      latitude: result.geometry.lat,
      longitude: result.geometry.lng,
      formatted: result.formatted,
      components: result.components,
    };
  } catch (err) {
    console.error('Erreur géocodage OpenCage :', err);
    return null;
  }
};
