import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Diciplina } from '../../diciplina';

@Component({
  selector: 'app-diciplinas-component',
  standalone: false,
  templateUrl: './diciplinas-component.html',
  styleUrl: './diciplinas-component.css'
})
export class DiciplinasComponent {
  disciplinas: Diciplina[] = [];
  formGroupDisciplina: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.formGroupDisciplina = formBuilder.group({
      Name: [''],
      Code:[''],
      Carga:[''],
      Classroom:['']
    });

  }

  save(){
    alert(this.formGroupDisciplina.value);
    this.formFormGroupDisciplina.reset();

  }

}
