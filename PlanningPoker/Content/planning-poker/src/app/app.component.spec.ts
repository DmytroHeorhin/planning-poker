import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RoomSelectorComponent } from './room-selector/room-selector.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RoomSelectorComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Planning Poker');
  });

  it('should render room selector and path room name to it', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.roomName = 'test';
    fixture.detectChanges();
    const childDebugElement = fixture.debugElement.query(By.directive(RoomSelectorComponent));
    expect(childDebugElement.componentInstance.roomName).toEqual('test');
  });
});
