import {Component, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, NgFor} from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MsalBroadcastService, MsalService} from "@azure/msal-angular";
import {EventMessage, EventType, InteractionStatus} from "@azure/msal-browser";
import {filter, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    NgFor,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular with EntraId';
  private readonly _destroying$ = new Subject<void>();

  constructor(private msalService: MsalService, private msalBroadcastService: MsalBroadcastService) {
  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

  ngOnInit(): void {
    this.msalService.handleRedirectObservable().subscribe();
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((event) => {
        console.log('msalBroadcastService event', event);
    });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      })
  }

  login() {
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logout();
  }

  setLoginDisplay() {

  }
}
