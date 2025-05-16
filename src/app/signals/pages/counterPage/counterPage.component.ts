import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counterPage.component.html',
  styleUrl: './counterPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent { }
