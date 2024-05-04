import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DublinPage } from './dublin.page';

describe('DublinPage', () => {
  let component: DublinPage;
  let fixture: ComponentFixture<DublinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DublinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
