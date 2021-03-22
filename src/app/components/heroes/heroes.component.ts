import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Spiderman',
    age: 23,
    power: 'Aracnido',
    identity: 'Peter Parker',
    company: 'Marvel'
  }

  constructor(){

  }

  ngOnInit(): void {
  }

}
