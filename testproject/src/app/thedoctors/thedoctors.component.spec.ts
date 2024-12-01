import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThedoctorsComponent } from './thedoctors.component';

describe('ThedoctorsComponent', () => {
  let component: ThedoctorsComponent;
  let fixture: ComponentFixture<ThedoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThedoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThedoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
