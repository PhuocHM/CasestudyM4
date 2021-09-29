import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViralVideoComponent } from './viral-video.component';

describe('ViralVideoComponent', () => {
  let component: ViralVideoComponent;
  let fixture: ComponentFixture<ViralVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViralVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViralVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
