export type PlanningType = 'hebergement' | 'transport' | 'activite';

export type PlanningData = {
    id: number;
    type: PlanningType | null;
    transportMode?: 'avion' | 'train' | 'bus' | 'voiture' | 'taxi' | 'uber' | 'ferry' | 'velo' | 'pied';
    title: string | null;
    location: string | null;
    startDate: Date | null;
    endDate: Date | null;
    link?: string;
    price?: number | 0;
    booked?: boolean;
    note?: string | null;
    departureCity?: string;
    arrivalCity?: string;
    documents?: { uri: string; name: string }[];
};

export type DocumentUpload = {
  uri: string;
  name: string;
};

export type StepProps = {
  data: PlanningData;
  onNext: (docs?: DocumentUpload[]) => void;
  onBack?: () => void;
  onChange: (field: keyof PlanningData, value: any) => void;
  loading: boolean;
  pendingDocuments?: DocumentUpload[]; // facultatif
  setPendingDocuments?: (docs: DocumentUpload[]) => void; // facultatif
};

export interface CreatePlanningResponse {
  message: string;
  item: PlanningData;
}

export type GetPlanningsResponse = PlanningData[];

export type UpdatePlanningResponse = PlanningData;