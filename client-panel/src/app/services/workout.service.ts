import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { Workout } from '../models/Workout';

@Injectable()
export class WorkoutService {
  workoutsCollection: AngularFirestoreCollection<Workout>;
  workoutDoc: AngularFirestoreDocument<Workout>;
  workouts: Observable<Workout[]>;
  workout: Observable<Workout>;

  constructor(private afs: AngularFirestore) {
    this.workoutsCollection = this.afs.collection('workouts');
  }

  getWorkouts(): Observable<Workout[]> {
     this.workouts = this.workoutsCollection.snapshotChanges()
    .map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Workout;
        data.id = action.payload.doc.id;
        return data;
      });
    });
    return this.workouts;
  }

  newWorkout(workout: Workout) {
    this.workoutsCollection.add(workout);
  }

  getWorkout(id: string): Observable<Workout> {
    this.workoutDoc = this.afs.doc<Workout>(`workouts/${id}`);
    this.workout = this.workoutDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Workout;
        data.id = action.payload.id;
        return data;
      }
    });

    return this.workout;
  }

  updateWorkout(client: Workout) {
    this.workoutDoc = this.afs.doc(`workouts/${client.id}`);
    this.workoutDoc.update(client);
  }

  deleteWorkout(client: Workout) {
    this.workoutDoc = this.afs.doc(`workouts/${client.id}`);
    this.workoutDoc.delete();
  }

}
