export interface PhotoType {
    id: number;
    file_name: string;
    title: string;
    category: number;
    description: string;
    like: boolean;
}

export interface PhotoCategory {
    label: string;
    value: number;
}