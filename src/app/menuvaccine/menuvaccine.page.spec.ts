import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuvaccinePage } from './menuvaccine.page';

describe('MenuvaccinePage', () => {
  let component: MenuvaccinePage;
  let fixture: ComponentFixture<MenuvaccinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuvaccinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuvaccinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
