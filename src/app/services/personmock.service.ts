import {Injectable, signal} from '@angular/core';
import {Person} from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonmockService {
  // private personSignal = signal<Person[]>([])
  private person1:Person = {id:"1", name:"a", age: 20, money: 5000
    // , purchases:[]
  };
  private person2:Person = {id:"2", name:"b", age: 25, money: 7000
    // , purchases:[]
  };
  private personList = [this.person1, this.person2];
  constructor() {
  }

  getPersons() {
    return this.personList;
  }

  get persons() {
    return this.personList;
  }

  addPerson(person: Person) {
    this.personList.push(person);
  }

  deletePerson(personId:string) {
    // let tempList:Person[] = [];
    console.log("Id = ", personId);
    console.log("before deleting personList = ", this.personList);
    let tempList : Person [] = [];
    // this.personList.forEach((person, index) => {
    //   if (person.id != personId) {
    //     this.personList.splice(index, 1);
    //   }
    // });
    this.personList.forEach(p => {
      if (p.id != personId) {
        tempList.push(p);
      }
    })
    this.personList = tempList;
    console.log("temp list = ", tempList);
    console.log("after deleting personList = ", this.personList);
  }


}
