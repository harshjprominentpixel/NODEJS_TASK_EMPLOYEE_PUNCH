export interface Employee {
  id?: number;
  name: string;
  dob: Date;
  createdAt?: Date;
  updatedAt?: Date;
  status?: number;
}

export interface PunchInTime {
  id?: number;
  in_time_ist: Date;
  out_time_ist: Date;
  emp_id: number;
  createdAt?: Date;
  updatedAt?: Date;
  status?: number;
}
