import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebritesListComponent } from './celebrites-list.component';

describe('CelebritesListComponent', () => {
  let component: CelebritesListComponent;
  let fixture: ComponentFixture<CelebritesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebritesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
