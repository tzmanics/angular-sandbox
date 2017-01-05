import { Injectable } from '@angular/core';

import { Toshi } from './toshi';
import { TOSHIS } from './mock-toshis';

@Injectable()

export class ToshiService {
  getToshis(): Promise<Toshi[]> {
    return Promise.resolve(TOSHIS);
  }
}

