import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RoomSelectorComponent } from './room-selector.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';

describe('RoomSelectorComponent', () => {
  let component: RoomSelectorComponent;
  let fixture: ComponentFixture<RoomSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RoomSelectorComponent,
        HomeComponent,
        RoomComponent
       ],
       schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSelectorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('room is not selected', () => {
    beforeEach(() => {
      component.roomName = null;
      fixture.detectChanges();
    });

    it('should render home', () => {
      const childDebugElement = fixture.debugElement.query(By.directive(HomeComponent));
      expect(childDebugElement.componentInstance).toBeTruthy();
    });

    it('should not render room', () => {
      const childDebugElement = fixture.debugElement.query(By.directive(RoomComponent));
      expect(childDebugElement).toBeFalsy();
    });
  });

  describe('room is selected', () => {
    beforeEach(() => {
      component.roomName = 'test';
      fixture.detectChanges();
    });

    it('should render room and path room name to it', () => {
      const childDebugElement = fixture.debugElement.query(By.directive(RoomComponent));
      expect(childDebugElement.componentInstance.roomName).toEqual('test');
    });

    it('should not render home', () => {
      const childDebugElement = fixture.debugElement.query(By.directive(HomeComponent));
      expect(childDebugElement).toBeFalsy();
    });
  });
});
