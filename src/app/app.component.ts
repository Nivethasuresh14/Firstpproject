import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
export interface Person {
  name: string;
  age: number;
  country: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'formmodel';
  age : string;
  people: Person[] = [];

  name = ['nivetha','sureka','suresh','naren','chitra']

  jobForm = new FormGroup({
    name: new FormControl('',),
    email: new FormControl(''),
    mobileno: new FormControl(''),

  });
  preview: string;

  ngOnInit(): void {
    this.name.forEach((e,i)=>
    this.people.push({
      name: e,
      age: i + 20,
      country: 'Bulgaria'
    })

  )

console.log(this.people);
}

  

  save(){
    this.preview = JSON.stringify(this.jobForm.value);
  }





}
