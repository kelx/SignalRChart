import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-Charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignalRService } from './services/signal-r.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    SignalRService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
