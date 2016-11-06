import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-paypal',
  template: `


<div class="container">
  <div class="panel panel-success">
    <div class="panel-body">
      <label class="label label-primary form-control">merlot wine</label>
      <form #form class="form-inline" name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_xclick">
        <input type="hidden" name="business" value="bibliotechavr@gmail.com">
        <input type="hidden" name="currency_code" value="USD">
        <input type="text" class="form-control" size="30" id="paypalAmount" name="amount"/>
        <br/>
        <br/>
        <input (click)="form.submit()" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0"
               name="submit" alt="Make payments with PayPal - it's fast, free and secure!"/>
      </form>
    </div>
  </div>
</div>


  `,
  styles: []
})
export class TemplatePaypalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
