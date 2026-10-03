import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { MOCKUP_STUDENT_DATA, Student } from '../classes/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:3000';

  private http = inject(HttpClient);

<<<<<<< HEAD
  // C: CREAT - add new student
  public create(student: Student): Observable<any> {
    MOCKUP_STUDENT_DATA.push(student);
    return of(MOCKUP_STUDENT_DATA);
=======
  // C: CREATE - add new student
  public create(student: Student): Observable<any> {
    // MOCKUP_STUDENT_DATA.push(student);
    // return of(MOCKUP_STUDENT_DATA);
    return this.http.post(this.apiUrl + '/student', student);
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae
  }

  // R: READ - get all student data
  public getAll(): Observable<Student[]> {
<<<<<<< HEAD
    return this.http.get<any[]>(this.apiUrl + '/student').pipe(
      map((resList) => {
        //
        return resList.map((res) => ({
          studentId: res.studentId,
          studentName: res.studentName,
          department: res.department,
          faculty: res.faculty,
          email: res.email,
          tel: res.tel,
          picture: res.picture
        } as Student));
      })
    );
  }

  // U: UPDATE
  public update(student: Student, updatedStudent: Student): Observable<any> {
    // find position
    const updatePosition = MOCKUP_STUDENT_DATA.indexOf(student);
    console.log('update position: ' + updatePosition);
    // update data
    MOCKUP_STUDENT_DATA[updatePosition] = {
      studentId: updatedStudent.studentId,
      studentName: updatedStudent.studentName,
      department: updatedStudent.department,
      faculty: updatedStudent.faculty,
      email: updatedStudent.email,
      tel: updatedStudent.tel,
      picture: updatedStudent.picture,
      password: '******'
    };
    // return result
    return of({ result: true });
=======
  return this.http.get<any[]>(this.apiUrl + '/student').pipe(
    map((resList) => {
      // ใช้ .map() ของ Array เพื่อแปลงข้อมูลทุกตัวในอาเรย์
      return resList.map((res) => ({
        studentId: res.studentId,
        studentName: res.studentName,
        department: res.department,
        faculty: res.faculty,
        email: res.email,
        tel: res.tel,
        picture: res.picture
      } as Student));
    })
  );
}

  // U: UPDATE
  public update(student: Student, updatedStudent: Student): Observable<any> {
    return this.http.put(this.apiUrl + '/student/' + updatedStudent.studentId, updatedStudent);
    // find postion to update
    // const updatedPosition = MOCKUP_STUDENT_DATA.indexOf(student);
    // console.log('update position: ' + updatedPosition);
    // update data
    // MOCKUP_STUDENT_DATA[updatedPosition] = {
    //   studentId: updatedStudent.studentId,
    //   studentName: updatedStudent.studentName,
    //   department: updatedStudent.department,
    //   faculty: updatedStudent.faculty,
    //   email: updatedStudent.email,
    //   tel: updatedStudent.tel,
    //   picture: updatedStudent.picture,
    //   password: '*******'
    // };
    // return result
    // return of({ result: true });
>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae
  }

  // D: DELETE
  public delete(deletedStudent: Student): Observable<any> {
<<<<<<< HEAD
    // Find Position to Delete
    const updatePosition = MOCKUP_STUDENT_DATA.indexOf(deletedStudent);
    // Delete
    MOCKUP_STUDENT_DATA.splice(updatePosition, 1);
    //return 
    return of({ result: true });
  }
=======
    // FIND POSITION to DELETE
    // const updatedPosition = MOCKUP_STUDENT_DATA.indexOf(deletedStudent);
    // DELETE
    // MOCKUP_STUDENT_DATA.splice(updatedPosition, 1);
    // RETURN
    // return of({ result: true });
    return this.http.delete(this.apiUrl + '/student/' + deletedStudent.studentId);
  }

>>>>>>> 3eaf7edfffc809d644259dacfc29969faa8219ae
}
