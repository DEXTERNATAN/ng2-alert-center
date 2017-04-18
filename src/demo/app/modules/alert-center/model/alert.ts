import {AlertType} from './alert-type';

export class Alert {
  constructor(public alertType: AlertType, public text: string, public textStrong: string = '', public autoDismissTime = 0, public dismissable = true) {
  }

  isDismissable() {
    return this.autoDismissTime === 0 || this.dismissable; // avoid sticking alerts
  }

  isAutoDismissing() {
    return this.autoDismissTime > 0;
  }
}
