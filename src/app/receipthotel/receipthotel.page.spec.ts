import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceipthotelPage } from './receipthotel.page';

describe('ReceipthotelPage', () => {
  let component: ReceipthotelPage;
  let fixture: ComponentFixture<ReceipthotelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipthotelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceipthotelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
