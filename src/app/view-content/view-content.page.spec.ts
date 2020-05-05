import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewContentPage } from './view-content.page';

describe('ViewContentPage', () => {
  let component: ViewContentPage;
  let fixture: ComponentFixture<ViewContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
