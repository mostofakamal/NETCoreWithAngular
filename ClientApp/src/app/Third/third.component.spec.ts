import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdComponent } from './third.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ThirdComponent', () => {
  let component: ThirdComponent;
  let fixture: ComponentFixture<ThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
