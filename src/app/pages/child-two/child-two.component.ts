import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValidateFormService, ValidateType } from 'src/app/shared/validate-form.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss'],
})
export class ChildTwoComponent implements OnInit {
  @ViewChild('button') button: ElementRef | undefined;

  constructor(private validateForm: ValidateFormService) {
    this.validateForm.formValid.subscribe((res: any) => {
      if(res == ValidateType.Checking && this.button){
        this.button.nativeElement.click()
      }
    })
  }
  two: string = '';

  ngOnInit(): void {
    
  }

  submit(form: NgForm) {
    let check = false;
    if (form.invalid) {
      check = false;
    } else {
      check = true;
    }

    this.validateForm.updateChildSubmit('two', check);
  }
}
