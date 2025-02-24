import {Component, effect, inject} from '@angular/core';
import {PersonmockService} from '../services/personmock.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';
import {Person} from '../models/person.model';
import {PersonService} from '../services/person.service';

@Component({
  selector: 'app-person-grid',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    RouterModule

  ],
  templateUrl: './person-grid.component.html',
  styleUrl: './person-grid.component.css'
})
export class PersonGridComponent {
  personService : PersonService = inject(PersonService);
  snackBar = inject(MatSnackBar);
  displayedColumns: string[] = ["id","name","age","money","actions"];
  dataSource = new MatTableDataSource<Person>();

  persons = this.personService.persons;

  constructor() {
    this.personService.getPersons();

    effect(() => {
      this.dataSource.data = this.persons();
    });
  }

  deletePerson(personId: string) {
    console.log("deleting with id ", personId);
    this.personService.deletePerson(personId);
    this.snackBar.open("deleted suuccessfully");

  }

}
