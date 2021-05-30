import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AEsperaDeUmMilagrePage } from './a-espera-de-um-milagre.page';

describe('AEsperaDeUmMilagrePage', () => {
  let component: AEsperaDeUmMilagrePage;
  let fixture: ComponentFixture<AEsperaDeUmMilagrePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AEsperaDeUmMilagrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AEsperaDeUmMilagrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
