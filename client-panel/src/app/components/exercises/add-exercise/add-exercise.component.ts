import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Exercise } from '../../../models/Exercise';
import { WorkoutService } from '../../../services/workout.service';


@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  exerciseForm = this.fb.group({
    name: ['', Validators.required],
    type: [''],
    sets: this.fb.array([
      this.fb.group({
        reps: [''],
        weight: ['']
      })
    ])
  });
  constructor(private fb: FormBuilder,
              private workoutService: WorkoutService) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.exerciseForm.value);
    this.workoutService.addExercise(this.exerciseForm.value);
    this.exerciseForm.reset();
  }

  addSet() {
    console.log(this.sets);
    this.sets.push(
      this.fb.group({
        reps: [''],
        weight: ['']
      })
    );
  }
  get sets() {
    return this.exerciseForm.get('sets') as FormArray;
  }
}
