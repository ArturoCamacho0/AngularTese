import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [
    HeroService
  ]
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public hero: Hero;
  public status: boolean = false;

  constructor(
    private _heroService: HeroService
  ){
    this.getHeroes();
  }

  ngOnInit(): void {
  }

  getHeroes(){
    this._heroService.getHeroes().subscribe(
      response => {
        this.heroes = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  onClick(hero){
    this.hero = hero;
    this.status = true;
  }

  onCancel(){
    this.status = false;
  }

  onSave(changes){
    for(let hero of this.heroes){
      if(changes.id === hero.id){
        hero.name = changes.name;
        hero.age = changes.age;
        hero.power = changes.power;
        hero.identity = changes.identity;
        hero.company = changes.company;

        this.status = false;
        break;
      }
    }
  }

  viewHero(hero: Hero){
    this.hero = hero;
  }

}