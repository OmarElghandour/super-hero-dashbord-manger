// hero-details.component.ts

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  // hero: Hero;
  heroForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) 
  { 
    this.heroForm = this.fb.group({
      realName: ['', Validators.required],
      heroName: ['', Validators.required],
      publisher: ['', Validators.required],
      firstAppearanceDate: ['', Validators.required],
      abilities: this.fb.array([
        this.fb.control('')
      ]), 
      teamAffiliations: this.fb.array([
        this.fb.control('')
      ]) 
    });
  }

  ngOnInit(): void {



    // this.route.paramMap.subscribe(params => {
    //   const heroId = +.get('id'); // Get hero id from route parameters
    //   // Here you can fetch the hero data based on the id from your service or HEROES array
    //   // For simplicity, let's assume HEROES is available globally
    //   this.hero = HERparamsOES.find(hero => hero.id === heroId);
    // });
  }


  get getTeamAffiliations() {
    return this.heroForm.get('teamAffiliations') as FormArray;
  }

  addTeamAffiliation(): void {
    this.getTeamAffiliations.push(this.fb.control(''));
  }

  removeTeamAffiliation(index: number): void {
    this.getTeamAffiliations.removeAt(index);
  }



  get getAbilities() {
    return this.heroForm.get('abilities') as FormArray;
  }

  addAbility(): void {
    this.getAbilities.push(this.fb.control(''));
  }

  removeAbility(index: number): void {
    this.getAbilities.removeAt(index);
  }


  onSubmit(): void {
    if (this.heroForm.valid) {
      // Process form data
      console.log(this.heroForm.value);
    } else {
      // Handle form validation errors
      console.error('Form is invalid');
    }
  }


  
}
