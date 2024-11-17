import {Component} from '@angular/core';
import {Course} from '../model/course';

import {AppMaterialModule} from '../../shared/app-material/app-material.module';
import {CoursesService} from '../services/courses.service';
import {Observable} from 'rxjs';
import {AsyncPipe, CommonModule} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    AppMaterialModule,
    AsyncPipe,
    MatProgressSpinner,
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  constructor(private service: CoursesService) {

    this.courses$ = this.service.list();
  }

}
