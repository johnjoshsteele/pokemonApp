import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHomeComponent } from './pokemon-home.component';

describe('PokemonHomeComponent', () => {
  let component: PokemonHomeComponent;
  let fixture: ComponentFixture<PokemonHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonHomeComponent]
    });
    fixture = TestBed.createComponent(PokemonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
