export const toDateOnlyString = (date: Date | string) =>
    new Date(date).toISOString().split('T')[0];

export const getAllDaysBetween = (start: Date, end: Date): string[] => {
    const dates: string[] = [];
    const current = new Date(start);
    while (current < end) {
        dates.push(toDateOnlyString(current));
        current.setDate(current.getDate() + 1);
    }
    return dates;
};

export const formatDate = (raw: string) =>
    new Date(raw).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
