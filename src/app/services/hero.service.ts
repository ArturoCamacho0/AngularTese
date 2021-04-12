import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public heroes;

  constructor(
    private _messageService: MessageService
  ){

  }

  getHeroes(): Observable<Hero[]>{
    const HEROES_LIST = of(HEROES);
    this._messageService.add('HeroService: fetched heroes');
    return HEROES_LIST;
  }
}
