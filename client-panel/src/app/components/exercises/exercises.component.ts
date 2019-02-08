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

}
