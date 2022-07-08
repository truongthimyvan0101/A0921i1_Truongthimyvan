import { Component, OnInit } from '@angular/core';
export interface IStudent {
  id: number;
  name: string;
  mark: number;
  image: string;
}
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name: 'Truong Thi My Van',
    mark: 0,
    image:'https://haycafe.vn/wp-content/uploads/2022/01/Hinh-anh-cute.jpg'
};
  constructor() { }

  ngOnInit(): void {
  }

}
