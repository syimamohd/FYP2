import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BanklistPage } from './banklist.page';

describe('BanklistPage', () => {
  let component: BanklistPage;
  let fixture: ComponentFixture<BanklistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanklistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BanklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
