import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  jobForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    contacts: this.fb.group({
      contactType: ['ss'],
      email: ['',[Validators.required]],
      phone: [''],
    }),
    skills: this.fb.array([]),
  });
 
  preview: string = '';

  ngOnInit(): void {}

    save() {
      this.preview = JSON.stringify(this.jobForm.value);
    }

    get skillsForms() {
      return this.jobForm.get('skills') as FormArray;
    }
   
    addASkillFormGroup() {
      this.skillsForms.push(
        this.fb.group({
          programLanguage: [''],
          experience: [0],
        })
      );
    }
   
    removeSkillFormGroup(index: number) {
      this.skillsForms.removeAt(index);
    }
  }
  



