import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  registerForm: FormGroup; //saisie input
  reactiveForm: FormGroup; // recaptcha
  form: FormGroup; // checkbox
  submitted = false;
  

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}
  log(x){console.log(x);}

  Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    })
   }
   onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    this.submitted = true;

      // stop le formulaire si invalide
      if (this.form.invalid) {
          return;
      }
    alert('SUCCESS!! ' + JSON.stringify(this.form.value, null, 4));
      
  }


  ngOnInit() {
      this.registerForm = this.fb.group({
          Nom: ['', Validators.required, Validators.minLength(10)],
          Prenom: ['', Validators.required],
          sexe: ['', Validators.required],
          Email: ['', [Validators.required, Validators.email]],
          Password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          checkboxACTED: [false, Validators.requiredTrue]
      });
      this.reactiveForm = new FormGroup({
        recaptchaReactive: new FormControl(null, Validators.required)
      });
      
      
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop le formulaire si invalide
      if (this.registerForm.invalid) {
          return;
      }

      // afficher les valeurs si valide 
      alert('SUCCESS!! ' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
  

}
