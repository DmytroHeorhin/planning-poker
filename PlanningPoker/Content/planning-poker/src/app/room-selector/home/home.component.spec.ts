import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        JoinRoomComponent,
        CreateRoomComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render join room form', () => {
    const childDebugElement = fixture.debugElement.query(By.directive(JoinRoomComponent));
    expect(childDebugElement.componentInstance).toBeTruthy();
  });

  it('should render create room form', () => {
    const childDebugElement = fixture.debugElement.query(By.directive(CreateRoomComponent));
    expect(childDebugElement.componentInstance).toBeTruthy();
  });
});
