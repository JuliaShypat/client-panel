export interface Exercise {
  id?: string;
  name?: string;
  sets?: Array<Set>;
  type?: string;
}

export interface Set {
  reps?: number;
  weight?: number;
}

