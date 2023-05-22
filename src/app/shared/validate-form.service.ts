import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export enum ValidateType {
  Checking,
  Valid,
  Invalid,
}
@Injectable({
  providedIn: 'root',
})
export class ValidateFormService {
  public objFormValidate = [
    {
      key: 'one',
      value: true,
    },
    {
      key: 'two',
      value: true,
    },
    {
      key: 'three',
      value: true,
    },
    {
      key: 'four',
      value: true,
    },
  ];

  private checkForm = new BehaviorSubject<any>({});

  formValid = this.checkForm.asObservable();

  constructor() {}

  submitForm() {
    this.objFormValidate.forEach((ele: any) => {
      ele.value = false;
    });
    this.checkForm.next(ValidateType.Checking);
  }

  updateChildSubmit(key: string, value: boolean){
    for(let i = 0; i < this.objFormValidate.length; i++){
      if(key == this.objFormValidate[i].key){
        this.objFormValidate[i].value = value;
      }
    }

    let valid = this.objFormValidate.every((ele: any) => ele.value);
    if(valid){
      this.checkForm.next(ValidateType.Valid)
    }else{
      this.checkForm.next(ValidateType.Invalid)
    }
  }
    
   resetValidate(){
    this.objFormValidate.forEach((item: any) => {
      item.value = true;
    })
   }
}
