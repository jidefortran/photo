import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoButtonComponent } from './photo-button.component';

describe('PhotoButtonComponent', () => {
  let component: PhotoButtonComponent;
  let fixture: ComponentFixture<PhotoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
