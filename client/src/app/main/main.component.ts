import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  fixedPosition = false;
  routerChange = new Subscription();

  constructor(public router: Router) {
    this.routerChange.add(
      router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.checkRouterUrl();
        }
      })
    );
  }

  ngOnInit(): void {
    console.log('main');
  }

  ngOnDestroy(): void {
    this.routerChange.unsubscribe();
  }

  checkRouterUrl(): void {
    this.fixedPosition = false;
    const url = this.router.url;

    if (url.includes('/')) {
      this.fixedPosition = true;
    }
  }
}
