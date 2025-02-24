import {Injectable, signal} from '@angular/core';
import {Person} from '../models/person.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personSignal = signal<Person[]>([])


  constructor(private http: HttpClient) { }

  getPersons() {
    // this.http.get<Person[]>('http://localhost:3000/persons')
    this.http.get<Person[]>('http://localhost:8080/persons')
      .subscribe(persons =>  {
        console.log(persons);
        this.personSignal.set(persons);
      })
  }

  get persons() {
    return this.personSignal
  }

  addPerson(person: Person) {
    // this.http.post('http://localhost:3000/persons', person)
    this.http.post('http://localhost:8080/persons', person)
      .subscribe(() => {
        console.log(person);
        this.getPersons();
      })

  }

  deletePerson(id: string) {
    // this.http.delete(`http://localhost:3000/persons/${id}`)
    this.http.delete(`http://localhost:8080/persons/${id}`)
      .subscribe(() => {
        console.log(id);
        this.getPersons();
      })

  }

  updatePerson(id: string, updatedperson: Person) {
    this.http.put(`http://localhost:3000/persons/${id}`, updatedperson)
      .subscribe(() => {
        console.log(updatedperson);
        this.getPersons();
      })
  }

  getPersonById(id: string) {
    return this.personSignal().find(person => person.id == id);
  }
}
