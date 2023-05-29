export interface Room{
    totalRooms : number;
    availableRooms: number;
    usedRooms: number;
}

export interface RoomList{
    roomNumber : number;
    roomType : string;
    roomPrice : number;
    roomCheckin: Date;
    roomCheckout: Date;
    likedService: boolean;
}