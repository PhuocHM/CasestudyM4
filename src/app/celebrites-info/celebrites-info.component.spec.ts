import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebritesInfoComponent } from './celebrites-info.component';

describe('CelebritesInfoComponent', () => {
  let component: CelebritesInfoComponent;
  let fixture: ComponentFixture<CelebritesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebritesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebritesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
