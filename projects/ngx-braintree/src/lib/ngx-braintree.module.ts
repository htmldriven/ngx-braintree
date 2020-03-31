import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxBraintreeService } from './ngx-braintree.service';
import { ConfigureDropinService } from './configure-dropin.service';

import { NgxBraintreeComponent } from './ngx-braintree.component';
import { NgxBraintreeDirective } from './ngx-braintree.directive';
import { NgxBraintreeDisableDuringProcessingDirective } from './ngx-braintree-disable-during-processing.directive';
import { NgxBraintreePayDirective } from './ngx-braintree-pay.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxBraintreeComponent,
    NgxBraintreeDirective,
    NgxBraintreeDisableDuringProcessingDirective,
    NgxBraintreePayDirective
  ],
  exports: [
    NgxBraintreeComponent,
    NgxBraintreeDisableDuringProcessingDirective,
    NgxBraintreePayDirective
  ],
  providers: [
    { provide: NgxBraintreeService, useClass: NgxBraintreeService },
    { provide: ConfigureDropinService, useClass: ConfigureDropinService }
  ]
})
export class NgxBraintreeModule { }
