import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValidateFormService, ValidateType } from 'src/app/shared/validate-form.service';

@Component({
  selector: 'app-child-four',
  templateUrl: './child-four.component.html',
  styleUrls: ['./child-four.component.scss']
})
export class ChildFourComponent implements OnInit {

  four: string = ''
  value: string = ''
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

    this.validateForm.updateChildSubmit('four',check)

  }
}
function Viewchild(): (target: ChildFourComponent, propertyKey: "ngOnInit", descriptor: TypedPropertyDescriptor<() => void>) => void | TypedPropertyDescriptor<() => void> {
  throw new Error('Function not implemented.');
}

