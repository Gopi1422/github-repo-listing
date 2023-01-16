import { Component, OnInit, Input } from '@angular/core';
// import Repo from 'src/app/models/repo';
import User from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User = new User();
  flag: boolean = false;
  @Input() username: string;
  language: string[] = ['JavaScript', 'HTML', 'SCSS', 'Shell', 'CSS'];
  constructor(private userService: UserService) {}
  ngOnInit() {
    // if (this.username) {
    //   this.userService.getUser().subscribe((user: User) => (this.user = user));
    // }
  }

  displayUser(username: string) {
    if (!username) {
      this.user = new User();
      console.log(username);
    } else {
      this.userService
        .getUser(username)
        .subscribe((user: User) => (this.user = user));
      this.flag = true;
    }
  }
}
