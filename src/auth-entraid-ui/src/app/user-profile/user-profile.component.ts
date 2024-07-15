import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

type UserProfile = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile | undefined;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getProfile(environment.graphApiConfig.uri);
  }

  getProfile(url: string) {
    this.http.get(url)
      .subscribe(profile => {
        this.userProfile = profile;
      });
  }
}
