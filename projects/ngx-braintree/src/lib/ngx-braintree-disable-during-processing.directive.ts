import {
  Directive,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef
} from '@angular/core';

import { Subscription } from 'rxjs';

import { NgxBraintreeComponent } from './ngx-braintree.component';

@Directive({
  selector: '[ngxDisableDuringProcessing]',
})
export class NgxBraintreeDisableDuringProcessingDirective implements OnInit, OnDestroy {
  private processingStatusSubscription: Subscription;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private ngxBtComponent: NgxBraintreeComponent,
  ) {}

  ngOnInit(): void {
    this.processingStatusSubscription = this.ngxBtComponent.processingStatus.subscribe(
      (status: boolean) => {
        this.renderer.setProperty(
          this.elementRef.nativeElement,
          'disabled',
          status,
        );
      },
    );
  }

  ngOnDestroy(): void {
    if (this.processingStatusSubscription) {
      this.processingStatusSubscription.unsubscribe();
    }
  }
}
