import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  count : number;
  public counter : number = 0;
  addForm: FormGroup;

  rows: FormArray;
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.addForm = this.fb.group({
      NameC: ['', Validators.required],
      EmailC: ['', [Validators.required, Validators.email]],
      BusinessjobC: ['', Validators.required],
      BusinessAgencyC: ['', Validators.required],
      AdresseC: ['', Validators.required],
      Adresse2C: ['', Validators.required],
      CityC: ['', Validators.required],
      CountryC: ['', Validators.required],
      TelephoneC: ['', Validators.required],
      
    });

    this.rows = this.fb.array([]);

  }

  ngOnInit() {
    this.addForm.addControl('rows', this.rows);
  }

  // ajouter des lignes de saisies
  onAddRow() {
    this.rows.push(this.createItemFormGroup());
    
  }
// supprimer des lignes de saisies
  onRemoveRow(rowIndex:number){
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      NameC : null,
      EmailC : null,
      BusinessjobC : null,
      BusinessAgencyC : null,
      AdresseC : null,
      Adresse2C : null,
      CityC : null,
      CountryC : null,
      TelephoneC : null 
    });
  }

}
