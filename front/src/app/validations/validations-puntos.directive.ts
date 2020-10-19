import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';


export function bonoValidation(): ValidatorFn {
  return(control: AbstractControl) => {
    const bonoMax = new ValidationsPuntosDirective();
    return bonoMax.validate(control);
  }
}

export function validationDecimal(): ValidatorFn {
  return(control: AbstractControl) => {
    const valorDecimal = new ValidationsPuntosDirective();
    return valorDecimal.validate(control);
  }
}

@Directive({
  selector: '[appValidationsPuntos]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidationsPuntosDirective, multi:true}]
})
export class ValidationsPuntosDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors {
    const Bono = <string>control.value;

    if(!Bono){return;}

    if(Bono.length == 0 || Bono.match('^[0-9]*$/')){
      return null;
    }else{
      return {'bonoValidation': {'message': 'Solo se permiten caracteres numericos'}}
    }

  }

  validateDecimal(control: AbstractControl): ValidationErrors {
    const valorDecimal = <string>control.value;

    if(!valorDecimal){return;}

    if(valorDecimal.match('/^\d*\.?\d{0,4}$/g')){
      return null;
    }else{
      return {'decimal': {'message': 'Máximo 4 decimales permitidos'}}
    }
  }


  constructor() { }


}
