import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldContentComponent } from './old-content.component';

describe('OldContentComponent', () => {
  let component: OldContentComponent;
  let fixture: ComponentFixture<OldContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
