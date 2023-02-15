import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  info: string = "";
  color: string = "primary";

  constructor(private router: Router) {
  }

  ngOnInit() {

  }
  ClickonLogin(): void {
    const username = (<HTMLInputElement>document.getElementById("username")).value;
    const pw = (<HTMLInputElement>document.getElementById("pw")).value;
    console.log(username + " | " + pw);

    if (pw == "password" && username == "username") {
      this.router.navigate(["/employee"]);
    }
    else {
      this.info = "Falsch";
      this.color = "warning";
    }
  }
}
