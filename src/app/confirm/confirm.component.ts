import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
  selector: 'confirm',
  template: `<div class="modal-dialog">
              <div class="modal-content">
                 <div class="modal-header justify-content-center">
                   <h4 class="modal-title">{{title || 'Confirm'}}</h4>
                 </div>
                 <div class="modal-body text-center">
                   <p>{{message || 'Are you sure?'}}</p>
                 </div>
                 <div class="modal-footer justify-content-center">
                   <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
                 </div>
               </div>
            </div>`,
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {

  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // we set dialog result as true on click on confirm button, 
    // then we can get dialog result from caller code 
    this.result = true;
    this.close();
  }

}