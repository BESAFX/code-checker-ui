import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from './auth/token-storage.service';
import {MdlUpgradeElementsDirective} from './_directives/mdl-upgrade-elements.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MdlUpgradeElementsDirective]
})
export class AppComponent implements OnInit {
  private token: string;
  private username: string;
  private roles: string[];
  private router: Router;
  private drawer: any;

  constructor(private tokenStorage: TokenStorageService, private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.token = this.tokenStorage.getToken();
      this.username = this.tokenStorage.getUsername();
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
    this.router.navigate(['/login']);
  }

  toggleDrawer() {
    this.drawer = document.querySelector('.mdl-layout');
    this.drawer.MaterialLayout.toggleDrawer();
  }
}

