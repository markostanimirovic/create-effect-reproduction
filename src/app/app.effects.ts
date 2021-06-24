import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { createEffect } from '@ngrx/effects';
import { delay } from 'rxjs/operators';

const xy$ = of({ type: 'xy' }).pipe(delay(1000));

@Injectable()
export class AppEffects {
  x$ = createEffect(() => xy$);
  y$ = createEffect(() => xy$);

  // workaround
  // x$ = createEffect(() => () => xy$);
  // y$ = createEffect(() => () => xy$);
}
