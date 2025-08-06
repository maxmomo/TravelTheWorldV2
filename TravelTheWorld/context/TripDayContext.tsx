import { createContext, useContext } from 'react';

export const TripDayContext = createContext<{ tripId: string; date: string } | null>(null);
export const useTripDay = () => useContext(TripDayContext);
