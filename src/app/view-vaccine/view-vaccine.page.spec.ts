import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewVaccinePage } from './view-vaccine.page';

describe('ViewVaccinePage', () => {
  let component: ViewVaccinePage;
  let fixture: ComponentFixture<ViewVaccinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVaccinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewVaccinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
