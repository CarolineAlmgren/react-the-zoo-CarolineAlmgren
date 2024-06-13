export interface Animal {
    id: number;
    name: string;
    yearOfBirth: number;
    longDescription: string;
    imageUrl: string;
    isFed: boolean;
    lastFed: Date | null;
}