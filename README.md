# Ng2AlertCenter

Alert center provides an alert service and an alert component, you can include in your Angular 2 project.

Currently it uses bootstrap 3 for styling. If you don't use bootstrap, you can just use the bootstrap classes to apply your own styles.

## Install

`npm install ng2-alert-center --save`

## Usage

```
@Component({
  template: `
    <!-- Insert the alert center component once in your body /-->
    <div class="my-alert-center-style>
      <nac-alert-center></nac-alert-center>
    </div>
  `
})
export MyComponent {
  /* Inject the alert service into your component. */
  constructor(private service: AlertCenterService) { }
  
  /* Call this method to send an alert. */
  sendAnAlert() {
    const alert = new Alert(AlertType.INFO, 'Test alert.');
    
    this.service.alert(alert);
  }
  
  /* Let the alert disappear by itself in 5 seconds */
  sendAnAutoDismissingAlert() {
    const alert = new Alert(AlertType.INFO, 'Auto dismissing test alert.', '', 5000);

    this.service.alert(alert);
  }
}
```

## Show case

You can test the module online:

* https://ng2-alert-center-demo.cfapps.io

## Roadmap

Please consider, that this module is under development. Following features are coming:

* Animation for appearing and disappearing
* Links in alerts
* Support for i18n
* More tests
