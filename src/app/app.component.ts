import { Component } from '@angular/core';
import { SettingsService } from './services/index.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ajustes:SettingsService){}
}
