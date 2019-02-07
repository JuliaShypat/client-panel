import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';
import { Workout } from '../../models/Workout';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent implements OnInit {
  workout: Workout = {
    date: '',
    exercises: [],
    localization: '',
    duration: 0
  };

  disableBalanceOnAdd: Boolean;
  @ViewChild('workoutForm') form: any;

  constructor(// private flashMessage: FlashMessagesService,
              private workoutService: WorkoutService,
              private router: Router,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }

  onSubmit({value, valid}: {value: Workout; valid: Boolean}): void {
    if (!valid) {
      console.log('Form invalid');
      // this.flashMessage.show('Please fill out a form correctly', {cssClass: 'alert-danger', timeout: 4000});
    } else {
      this.workoutService.newWorkout(value);
      // this.flashMessage.show('New Clent added', {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/']);
    }
  }

}
