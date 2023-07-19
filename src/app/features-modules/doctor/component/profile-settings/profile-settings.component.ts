import { slideInFrom } from 'src/app/animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss'],
  animations: [slideInFrom('right')],
})
export class ProfileSettingsComponent {
  animationDirection = 'right';
}
