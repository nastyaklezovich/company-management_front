import { Component, OnInit } from "@angular/core";
import { AuthService, User } from "../../core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  private currentUser: User;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(val => (this.currentUser = val));
  }

  public get isAuthenthicated(): boolean {
    return this.currentUser !== null;
  }

}
