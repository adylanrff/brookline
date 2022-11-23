
export interface Schedule {
    departureTime?: string;
    arrivalTime?: string;
    containerLeft?: number;
    totalContainer?: number;
    containerFilled?: number;
}

export interface Route {
    id?: number;
    departureCity?: string;
    departurePort?: string;
    arrivalCity?: string;
    arrivalPort?: string;
    schedule?: Schedule[]
}

export interface ShipData {
    id?: string;
    IMONumber?: string;
    name?: string;
    ownerName?: string;
    waCP?: string;
    facebookCP?: string;
    imgUrl?: string;
    routes?: Route[];
}

export interface ShipCard {
    id?: string;
    IMONumber?: string;
    name?: string;
    ownerName?: string;
    waCP?: string;
    facebookCP?: string;
    imgUrl?: string;
    departureCity?: string;
    departurePort?: string;
    arrivalCity?: string;
    arrivalPort?: string;
    departureTime?: string;
    arrivalTime?: string;
    containerLeft?: number;
    totalContainer?: number;
    containerFilled?: number;
}