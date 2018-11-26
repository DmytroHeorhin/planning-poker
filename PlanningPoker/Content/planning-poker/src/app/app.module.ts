import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomSelectorComponent } from './room-selector/room-selector.component';
import { HomeComponent } from './room-selector/home/home.component';
import { RoomComponent } from './room-selector/room/room.component';
import { JoinRoomComponent } from './room-selector/home/join-room/join-room.component';
import { CreateRoomComponent } from './room-selector/home/create-room/create-room.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomSelectorComponent,
    HomeComponent,
    RoomComponent,
    JoinRoomComponent,
    CreateRoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
