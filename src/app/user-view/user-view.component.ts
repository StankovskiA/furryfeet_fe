import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  user: any;
  first_name:any;
  last_name:any;
  email:any;

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    debugger;
    console.log("NGONINIT U USER VIEW .!.");
    
    // this.user = sessionStorage.getItem('user');
    const first_nameTemp = sessionStorage.getItem('first_name');
    this.first_name = first_nameTemp ? JSON.parse(first_nameTemp) : null;

    // console.log(first_name);
    
    const last_nameTemp = sessionStorage.getItem('last_name');
    this.last_name = last_nameTemp ? JSON.parse(last_nameTemp) : null;

    // console.log(last_name);

    const emailTemp = sessionStorage.getItem('email');
    this.email = emailTemp ? JSON.parse(emailTemp) : null;

    // console.log(email);
    
    // console.log(this);
  }
}
