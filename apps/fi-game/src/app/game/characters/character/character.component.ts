import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'fi-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        required: true
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Age',
        required: true,
        min: 18
      }
    },
    {
      key: 'career',
      type: 'select',
      templateOptions: {
        label: 'Career',
        required: true,
        options: [
          { value: 1, label: 'Teacher' },
          { value: 2, label: 'Plumber' },
          { value: 3, label: 'Doctor' },
          { value: 4, label: 'Software Engineer' }
        ]
      }
    }
  ];

  submit(model) {
    console.log(model);
  }

  constructor() {}

  ngOnInit() {}
}
