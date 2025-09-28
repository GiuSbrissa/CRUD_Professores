import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Professor } from '../../professor';
import { ProfessorService } from '../professor-service.service';

@Component({
  selector: 'app-professor-component',
  standalone: false,
  templateUrl: './professor-component.html',
  styleUrl: './professor-component.css'
})
export class ProfessorComponent implements OnInit {
  ngOnInit(): void {
    this.service.getAllProducts().subscribe(
      {
        next: json => this.professores = json
      }
    );
  }
  professores: Professor[] = [];
  formGroupProfessor: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProfessorService){

  this.formGroupProfessor = formBuilder.group({
    Name: [''],
    Subject: [''],
    Phone: [''],
    Email: [''],
    ID: ['']

  });
}
save() {

    this.service.save(this.formGroupProfessor.value).subscribe(
      {
        next: json => {
          this.professores.push(json);
          this.formGroupProfessor.reset();
        }
      }
    )
    
  }
}
