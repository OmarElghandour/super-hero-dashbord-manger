import { Component } from '@angular/core';
import { Hero } from '../models/hero.modle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor(private router: Router) { 

  }
  // real name, hero name, publisher, first appearance date, list of abilities / powers and list of team affiliations
  heros : Hero[] = [
    {
      id : 1,
      name: 'Dr. Nice',
      realName: 'Dr. Nice',
      publisher: 'DC',
      firstAppearance: 2012,
      abilities: ['super strength'],
      teamAffiliations: ['team 1'],
      powers: ['super strength', 'fly']
    },
    {
      id : 2,
      name: 'Narco',
      realName: 'Narco',
      publisher: 'DC',
      firstAppearance: 2012,
      abilities: ['super strength'],
      teamAffiliations: ['team 1'],
      powers: ['super strength', 'fly']
    },
    {
      id : 3,
      name: 'Bombasto',
      realName: 'Bombasto',
      publisher: 'DC',
      firstAppearance: 2012,
      abilities: ['super strength'],
      teamAffiliations: ['team 1'],
      powers: ['super strength', 'fly']
    }
  ];



  goToDetails(hero: Hero): void {
    this.router.navigate(['/hero', hero.id]);
  }

}
