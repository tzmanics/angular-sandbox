import { Component, Input } from '@angular/core';

import { Toshi } from './toshi';

@Component({
  selector: 'my-toshi-detail',
  template: `
    <div *ngIf="toshi">
      <h2>{{toshi.name}} details!</h2>
      <div><label>rating: </label>{{toshi.rating}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="toshi.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class ToshiDetailComponent {
  @Input()
  toshi: Toshi;
}

