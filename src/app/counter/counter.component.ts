import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, incrementByAmount } from './counter.actions';
import { selectCount } from './counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  constructor(private store: Store<{ counter: { count: number } }>) {
    // this.count$ = this.store.select('counter', 'count');
    this.count$ = this.store.select(selectCount);
  }

  incrementAmount = 0;
  count$: Observable<number>;
  decrement() {
    this.store.dispatch(decrement());
  }
  increment() {
    this.store.dispatch(increment());
  }
  incrementByAmount() {
    this.store.dispatch(incrementByAmount({ amount: +this.incrementAmount }));
  }
}
