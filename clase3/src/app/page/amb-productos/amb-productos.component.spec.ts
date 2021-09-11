import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmbProductosComponent } from './amb-productos.component';

describe('AmbProductosComponent', () => {
  let component: AmbProductosComponent;
  let fixture: ComponentFixture<AmbProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmbProductosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
