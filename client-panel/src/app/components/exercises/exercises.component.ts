import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../../models/Exercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  id: string;
  exercises: Array<Exercise>;

  constructor(private workoutService: WorkoutService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.workoutService.getExercises(this.id).subscribe(exercises => {
      this.exercises = exercises;
    });
  }

  addNewItem() {
    const newEx: Exercise = {
        name: 'Dead lift',
        sets: [
          {reps: 12, weight: 30},
          {reps: 10, weight: 40},
          {reps: 8, weight: 50},
          {reps: 6, weight: 60},
          {reps: 4, weight: 70}
        ],
        type: 'rep'
      };
    this.workoutService.addExercise(newEx);
  }

}
