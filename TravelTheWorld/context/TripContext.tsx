import { createContext, useContext } from 'react';
import { TripData } from '@/types/trip.types';
import { PlanningData } from '@/types/planning.type';

export const TripContext = createContext<{
  trip: TripData | null;
  setTrip: (trip: TripData | null) => void;
  plannings: PlanningData[];
  setPlannings: (plannings: PlanningData[]) => void;
}>({
  trip: null,
  setTrip: () => { },
  plannings: [],
  setPlannings: () => { },
});

export const useTrip = () => useContext(TripContext);
