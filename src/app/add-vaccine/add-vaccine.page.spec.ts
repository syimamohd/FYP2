import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddVaccinePage } from './add-vaccine.page';

describe('AddVaccinePage', () => {
  let component: AddVaccinePage;
  let fixture: ComponentFixture<AddVaccinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVaccinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddVaccinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
