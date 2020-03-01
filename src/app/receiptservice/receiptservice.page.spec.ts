import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceiptservicePage } from './receiptservice.page';

describe('ReceiptservicePage', () => {
  let component: ReceiptservicePage;
  let fixture: ComponentFixture<ReceiptservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptservicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceiptservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
