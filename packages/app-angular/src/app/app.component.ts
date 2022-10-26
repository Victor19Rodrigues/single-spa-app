import { Component } from '@angular/core';
// @ts-ignore
import { logout } from '@mfe/util-auth'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';

  isLogged = !!localStorage.getItem('@single-spa-app:sessionToken-1.0.0')

  onSave() {
    logout()
  }
}
