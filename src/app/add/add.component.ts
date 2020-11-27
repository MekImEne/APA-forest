import { Component, Directive,EventEmitter} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RessforService } from '../ressfor.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
    reactiveForm: any = FormGroup;
    file1 = null;
    file2 = null;
  constructor(private fb: FormBuilder, private ress: RessforService) {
    this.reactiveForm = this.fb.group ({
      nom_scientifique : new FormControl ('', [Validators.required, Validators.compose([ Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
      nom_commun: new FormControl ('', [ Validators.required, Validators.compose([ Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
      category : new FormControl ('', [ Validators.required, Validators.compose([ Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
      description : new FormControl ('', [ Validators.required, Validators.compose([ Validators.pattern('[a-zA-Z ]*'), Validators.minLength(10)])])
    });
  }

onSelectFile(event: Event) {
  this.file1 = ( < HTMLInputElement > event.target).files[0];
  console.log(this.file1);
}
onSelectFile2(event: Event) {
  this.file2 = ( < HTMLInputElement > event.target).files[0];
  console.log(this.file2);
}

saveForm(submitForm: FormGroup) {
  if (submitForm.valid) {
      const ressource = submitForm.value;
      const formData = new FormData();
      formData.append('Ressource', JSON.stringify(ressource));
      formData.append('file1', this.file1);
      formData.append('file2', this.file2);
      this.ress.saveressource(formData).subscribe((response) => { console.log(response); } );
      this.reactiveForm.reset();
  } else {
    this.ValidateFormFields(submitForm);
  }
}

ValidateFormFields(submitForm: FormGroup) {
  Object.keys(submitForm.controls).forEach( field => {
    const control = submitForm.get(field);
    if (control instanceof FormControl) {
      control.markAllAsTouched( );
    } else if (control instanceof FormGroup) {
      this.ValidateFormFields(control);
    }
  });

}

}
