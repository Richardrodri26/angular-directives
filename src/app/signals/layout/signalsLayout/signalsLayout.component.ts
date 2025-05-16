import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './signalsLayout.component.html',
  styleUrl: './signalsLayout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsLayoutComponent { }
