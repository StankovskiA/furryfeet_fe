import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserviewService } from '../core/services/userview.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  users: any;
  // first_name:any;
  // last_name:any;
  // email:any;

  constructor(private userviewService: UserviewService, private router: Router) {}

  ngOnInit(): void {
    // const first_nameTemp = sessionStorage.getItem('first_name');
    // this.first_name = first_nameTemp ? JSON.parse(first_nameTemp) : null;
    
    // const last_nameTemp = sessionStorage.getItem('last_name');
    // this.last_name = last_nameTemp ? JSON.parse(last_nameTemp) : null;

    // const emailTemp = sessionStorage.getItem('email');
    // this.email = emailTemp ? JSON.parse(emailTemp) : null;
    //this.fetchUser();
  }

  // fetchUser() {
  //   this.userviewService.getUser().subscribe(
  //     (users: any) => {
  //       this.users = users;
  //     }
  //   );
  // }
}
