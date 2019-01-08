import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';
import {TokenStorageService} from './auth/token-storage.service';
import {MdlUpgradeElementsDirective} from './_directives/mdl-upgrade-elements.directive';
import {NgxSpinnerService} from "ngx-spinner";
import Timeout from 'await-timeout';

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

  constructor(private tokenStorage: TokenStorageService,
              private _router: Router,
              private spinner: NgxSpinnerService) {
    this.router = _router;
    this.router.events.subscribe((event: RouterEvent) => {

      switch (true) {
        case event instanceof NavigationStart: {
          this.spinner.show();
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          new Timeout().set(1000).then(() => this.spinner.hide());
          break;
        }
        default: {
          break;
        }

      }

    });
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

