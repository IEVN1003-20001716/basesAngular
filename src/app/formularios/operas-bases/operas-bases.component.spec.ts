import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperasBasesComponent } from './operas-bases.component';

describe('OperasBasesComponent', () => {
  let component: OperasBasesComponent;
  let fixture: ComponentFixture<OperasBasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperasBasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperasBasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
