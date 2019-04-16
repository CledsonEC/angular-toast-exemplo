import { Injectable } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotificationResult } from '../../models/notification-result';


declare const $: any;


export class Message {

    constructor(private toastr: ToastsManager) { }
  
    public success(message : string): void {
        this.toastr.success(message);
    }
  
    public success_string(result: String): void {
        this.toastr.success(result.toString());
    }
  
    public error_string(result: String): void {
      this.toastr.error(result.toString());
  }
  
    public error(result: NotificationResult): void {
      if (result && result.errors.length > 0) {
        this.toastr.error(result.errors[0].message, undefined, { dismiss: 'click' });
      }
    }
  
    public errorMessage(message: string) {
      this.toastr.error(message, undefined, { dismiss: 'click' });
    }
  
  }

  @Injectable()
export class HelperService {

  public message: Message = new Message(this.toastr);

  constructor(
    public toastr: ToastsManager) { }

}
