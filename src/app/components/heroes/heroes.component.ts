import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/app/services/mock-heroes';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public hero: Hero;
  public status: boolean = false;

  constructor(){
    this.heroes = HEROES;
  }

  ngOnInit(): void {
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