import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValidateFormService, ValidateType } from 'src/app/shared/validate-form.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {

  one: string = '';
  @ViewChild('button') button: ElementRef | undefined;

  constructor(private validateForm: ValidateFormService) {
    this.validateForm.formValid.subscribe((res: any) => {
      if(res == ValidateType.Checking && this.button){
        this.button.nativeElement.click()
      }
    })
  }

  ngOnInit(): void {
  }

  submit(form: NgForm){
    let check = false;
    if(form.invalid){
      check = false
    }else{
      check = true
    }

    this.validateForm.updateChildSubmit('one',check)

  }
}
