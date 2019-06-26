import { Injectable } from '@angular/core';

@Injectable()
export class ConfigureDropinService {

  constructor() { }

  configureCardHolderName(dropinConfig): void {
    dropinConfig.card = {
      cardholderName: {
        required: true
      }
    }
  }

  configurePaypalCheckout(dropinConfig, chargeAmount, currency): void {
    dropinConfig.paypal = {
      flow: 'checkout',
      amount: chargeAmount,
      currency: currency
    }
  }

  configurePaypalVault(dropinConfig): void {
    dropinConfig.paypal = {
      flow: 'vault'
    }
  }

  configureLocale(dropinConfig, locale): void {
    dropinConfig.locale = locale;
  }

  configureThreeDSecure(dropinConfig, chargeAmount): void {
    dropinConfig.threeDSecure = {
      amount: chargeAmount,
    };
  }
}
