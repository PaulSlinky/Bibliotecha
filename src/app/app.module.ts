import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { FabComponent } from './fab/fab.component';
import { EmailComponent } from './email/email.component';
import { TemplateEmailComponent } from './templates/template-email.component';
import { TemplatePaypalComponent } from './templates/template-paypal.component';
import { LogospinComponent } from './logospin/logospin.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeComponent,
    FabComponent,
    EmailComponent,
    TemplateEmailComponent,
    TemplatePaypalComponent,
    LogospinComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
