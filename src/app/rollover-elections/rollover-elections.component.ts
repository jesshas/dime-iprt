import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-rollover-elections',
  templateUrl: './rollover-elections.component.html',
  styleUrls: ['./rollover-elections.component.css']
})
export class RolloverElectionsComponent  {
  rolloverForm = this.fb.group ({
    rolloverOption: [''],
    rolloverAmount: [''],
    selectsourceOption: [''],
    allsourceOption: ['']
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.rolloverForm.value);
  }

}
