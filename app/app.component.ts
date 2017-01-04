import { Component } from '@angular/core';

export class Toshi {
  rating: number;
  name: string;
}

const TOSHIS: Toshi[] = [
  { rating: 90, name: 'Toshi in Pajamas' },
  { rating: 97, name: 'Toshi in a Tux' },
  { rating: 95, name: 'Toshi in Chaos' },
  { rating: 100, name: 'Toshmagosh' },
  { rating: 92, name: 'Toshi in Glasses' }
];

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>The Toshis</h2>
    <ul class="toshis">
      <li *ngFor="let toshi of toshis"
        [class.selected]="toshi === selectedToshi"
        (click)="onSelect(toshi)">
        <span class="badge">{{toshi.rating}}</span> {{toshi.name}}
      </li>
    </ul>
    <div *ngIf="selectedToshi">
      <h2>Look at {{selectedToshi.name}}</h2>
      <div><label>rating: </label>{{selectedToshi.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedToshi.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .toshis {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .toshis li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .toshis li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .toshis li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .toshis .text {
      position: relative;
      top: -3px;
    }
    .toshis .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'All the Toshis!';
  toshis = TOSHIS;
  selectedToshi: Toshi;

  onSelect(toshi: Toshi): void {
    this.selectedToshi = toshi;
  }
}
