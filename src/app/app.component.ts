import { Component, ViewChild } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { HelloComponent } from './hello.component';
import { slideAnim } from './animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideAnim]
})
export class AppComponent {
  name = 'Angular';
  @ViewChild(HelloComponent)
  private hlo: HelloComponent;
  state: String = 'inactive';
  
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.hlo.name = 'Inkstellar';
  }

  logout() {
    this.auth.login = false;
    this.router.navigate(['home']);
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active'
  }
}
