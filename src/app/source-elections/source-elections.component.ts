import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-source-elections',
  templateUrl: './source-elections.component.html',
  styleUrls: ['./source-elections.component.css']
})
export class SourceElectionsComponent {

  sourceForm= new FormGroup({
    sourceOne: new FormControl(''),
    sourceTwo: new FormControl(''),
    aftertaxSource: new FormControl('')
  });

}
