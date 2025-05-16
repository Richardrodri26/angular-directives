import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [],
  templateUrl: './userInfoPage.component.html',
  styleUrl: './userInfoPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoPageComponent { }
