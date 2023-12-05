import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

export class YourComponent {
  imageUrl = "https://drive.google.com/file/d/15VtlPyrAUDxENKdxjV6C4gSdhUscQk3V/view?usp=drive_link";
}


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
