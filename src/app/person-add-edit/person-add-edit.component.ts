import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {PersonmockService} from '../services/personmock.service';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Person} from '../models/person.model';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {PersonService} from '../services/person.service';

@Component({
  selector: 'app-person-add-edit',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule


  ],
  templateUrl: './person-add-edit.component.html',
  styleUrl: './person-add-edit.component.css'
})
export class PersonAddEditComponent {

  personService:PersonService = inject(PersonService);
  router = inject(Router);
  snackBar = inject(MatSnackBar);
  route = inject(ActivatedRoute);

  personForm: FormGroup;
  personId = 0;

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      name: [""],
      age: [null],
      money: [null]
    });

  }

  onSubmit() {
    console.log("Form submitted");
    console.log(this.personForm.value);

    if (this.personForm.valid) {
      const person: Person = {... this.personForm.value,id:this.personId ||
          // null
          "" + Date.now()
      };
      if (
        // this.isEditMode && this.expenseId != null
        false
      )
      {
        // console.log("edit mode")
        // this.expenseService.updateExpense(this.expenseId.toString(), expense);
        // this.snackBar.open("edited successfully");
        //
      } else {
        console.log("create mode")
        this.personService.addPerson(person);
        this.snackBar.open("created successfully");
      }
      console.log(person);
      this.router.navigate(["/dashboard"]);
    }
  }

}
