import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserviewService } from '../core/services/userview.service';
import { HttpHeaders } from '@angular/common/http';
import { AppointmentService } from '../core/services/appointment.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  loggedInUser: any;
  dogFromUser:any;
  dogData = {
    name: "Max",
    breed: "Labrador Retriever",
    age: 3,
    tag: "ABC123",
    photo: "https://example.com/dog.jpg",
    owner: 1, 
  };

  constructor(
    private userviewService: UserviewService,
    private router: Router,
    private appointmentService: AppointmentService
  ) {}

  async ngOnInit(): Promise<void> {
    // this.createDog();
    await this.getUser();
    this.getDog();
  }

  getDog() {
    // if (this.loggedInUser && this.loggedInUser.is_dog_walker) {
      this.userviewService.getDog(this.loggedInUser.id).subscribe((data) => {
        console.log(data);
        this.dogFromUser=data;
      });
    // }
  }

  async getUser() {
    this.loggedInUser = await this.userviewService.getUser().toPromise();
  }
  
  createDog(){
    this.userviewService.createDog(this.dogData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  toChangePassword(){
    this.router.navigate(['/']);
  }
}
