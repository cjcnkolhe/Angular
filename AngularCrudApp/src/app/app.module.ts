import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudmoduleModule } from './crud/crudmodule/crudmodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CrudmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
