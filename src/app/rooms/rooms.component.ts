import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  [x: string]: any;
  title = "Angular Tutorial"

  noOfRooms = 10
  hideRooms = false

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    usedRooms: 5
  }

  roomList: RoomList[] = []
  toggle() {
    this.hideRooms = !this.hideRooms
  }

  constructor() {}

  // Any Data is usually been updated in the ngOnInit section
  ngOnInit(): void {
    this.roomList =[
      {
        roomNumber: 1,
        roomType: "Master",
        roomPrice: 500,
        roomCheckin: new Date('20-May-2023'),
        roomCheckout: new Date('21-May-2023'),
        likedService: true
      },
      {
        roomNumber: 2,
        roomType: "Delux",
        roomPrice: 750,
        roomCheckin: new Date('20-May-2023'),
        roomCheckout: new Date('21-May-2023'),
        likedService: false
      },
      {
        roomNumber: 3,
        roomType: "Single",
        roomPrice: 300,
        roomCheckin: new Date('20-May-2023'),
        roomCheckout: new Date('21-May-2023'),
        likedService: true
      },
      {
        roomNumber: 4,
        roomType: "Delux",
        roomPrice: 1000,
        roomCheckin: new Date('20-May-2023'),
        roomCheckout: new Date('21-May-2023'),
        likedService: false
      }
    ]
  }


}
