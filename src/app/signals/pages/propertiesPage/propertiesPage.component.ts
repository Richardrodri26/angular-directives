import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [],
  templateUrl: './propertiesPage.component.html',
  styleUrl: './propertiesPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesPageComponent { }
