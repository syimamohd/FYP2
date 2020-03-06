import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSpaPage } from './add-spa.page';

describe('AddSpaPage', () => {
  let component: AddSpaPage;
  let fixture: ComponentFixture<AddSpaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSpaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
