import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { Ng2CompleterModule } from 'ng2-completer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { PartnerComponent } from './partner/partner.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    PartnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
