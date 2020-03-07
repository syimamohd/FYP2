import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookinggrabPage } from './bookinggrab.page';

describe('BookinggrabPage', () => {
  let component: BookinggrabPage;
  let fixture: ComponentFixture<BookinggrabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinggrabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookinggrabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
