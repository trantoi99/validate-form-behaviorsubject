import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  ValidateFormService,
  ValidateType,
} from 'src/app/shared/validate-form.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit,OnDestroy  {
  constructor(private validateService: ValidateFormService) {}
  subcription = new Subscription();

  ngOnInit(): void {
    this.subcription.add(
      this.validateService.formValid.subscribe((res: any) => {
        if (res === ValidateType.Valid) {
          console.log('call api');
        } 
      })
    )
  }

  submitForm() {
    this.validateService.submitForm();
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe()
  }
}
