import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counterPage.component.html',
  styleUrl: './counterPage.component.css',
})
export class CounterPageComponent {

  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    // this.counter.set(this.counter() + value);
    this.counter.update((counter) => counter + value);
  }

 }
