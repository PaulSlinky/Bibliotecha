import { Component, OnInit } from '@angular/core';


@Component({
 selector: 'app-email-submission',
 template: `
   <form class="email-submit">
       <p><strong>Please Enter Your Email Address:</strong></p>
       <input type="text" name="email">
       <input type="submit" value="Submit">
   </form>

 `,
 styles: [
   `
   @import url('https://fonts.googleapis.com/css?family=Open+Sans');
   p {
     font-size: 18px;
     font-family: 'Open Sans', sans-serif;
   }
   input {
     font-family: 'Open Sans', sans-serif; 
   }

   input[type=text] {
     padding: 10px;
     border: none;
     border-bottom: solid 2px #c9c9c9 ;
     transition: border 0.3s;
   }

   input[type=submit] {
     background-color: #166888 ;
     color: white;
     -moz-border-radius:18px;
        -webkit-border-radius:18px;
        border-radius:18px;
     border:none;
     font-size: 16px;
     padding: 10px;
   }
   .email-submit {
     width: 300px;
     padding: 35px;
     border:1px solid gray;
   }
 `
 ]
})
export class TemplateEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


