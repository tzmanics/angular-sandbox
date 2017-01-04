import { Component } from '@angular/core';

export class Toshi {
  rating: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>How about {{toshi.name}}</h2>
    <div><label>rating: </label>{{toshi.rating}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="toshi.name" placeholder="name">
    </div>
  `
})

export class AppComponent {
  title = 'All the Toshis!';

  toshi: Toshi = {
    rating: 95,
    name: 'Toshi in Pajamas'
  };
}
