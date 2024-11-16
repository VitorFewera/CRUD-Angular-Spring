import {Injectable} from '@angular/core';
import {Course} from '../model/course';
import {HttpClient} from '@angular/common/http';
import {first, take, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(
    private http: HttpClient
  ) {
  }

  list() {
    return this.http.get<Course[]>(this.API)
      .pipe(
        first(),//trazer somente o primeiro resultado da req e fechar a conexão.
        tap(courses => console.log(courses))
      )
  }


}
