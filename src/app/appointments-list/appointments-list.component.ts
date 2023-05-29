import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogWalker } from '../core/models/dogWalker.model';
import { Appointment } from '../core/models/appointment.model';
import { AppointmentService } from '../core/services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
  dogWalkers: DogWalker[] = [];
  appointments: Appointment[] = [];
  freeTimeSlots: string[] = [];
  selectedDogWalker: number = -1;


  constructor(private appointmentService: AppointmentService, private router: Router) {}

  ngOnInit() {
    this.fetchDogWalker();
  }

  fetchDogWalker() {
    this.appointmentService.getDogWalkers().subscribe(
      (dogWalkers: DogWalker[]) => {
        this.dogWalkers = dogWalkers;
      },
      (error) => {
        console.log('Error fetching appointments:', error);
      }
    );
  }

  generateDefaultTimeslots(): string[] {
    const timeSlots: string[] = [];
    const startHour: number = 9;
    const endHour: number = 14;
  
    for (let hour = startHour; hour <= endHour; hour++) {
      const timeSlot: string = `${hour}-${hour + 1}`;
      timeSlots.push(timeSlot);
    }
  
    return timeSlots;
  }


  removeTakenSlots(appointments: Appointment[]): string[]{
    let allTimeSlots = this.generateDefaultTimeslots();
    let takenSlots = appointments.map(obj => obj.timeslot);

    return allTimeSlots.filter((item) => !takenSlots.includes(item));
  };

  fetchAppointments(dogwalker_id: number) {
    this.selectedDogWalker = dogwalker_id;
    this.appointmentService.getAppointments().subscribe(
      (appointments: Appointment[]) => {
        let filteredAppointments = appointments.filter(item => item.dog_walker == dogwalker_id.toString());
        this.appointments = filteredAppointments;
        let freeTimeSlots = this.removeTakenSlots(filteredAppointments);
        this.freeTimeSlots = freeTimeSlots;
      },
      (error) => {
        console.log('Error fetching appointments:', error);
      }
    );
  }

  createAppointment(timeslot: string) {
    console.log(timeslot, this.selectedDogWalker)
    this.appointmentService.createAppointment(timeslot, this.selectedDogWalker).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error fetching appointments:', error);
      }
    );
  }
}

