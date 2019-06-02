import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectionFormComponent } from './election-form/election-form.component';
import { RolloverElectionsComponent } from './rollover-elections/rollover-elections.component';
import { SourceElectionsComponent } from './source-elections/source-elections.component';
import { DecemberElectionsComponent } from './december-elections/december-elections.component';
import { WithholdingElectionsComponent } from './withholding-elections/withholding-elections.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectionFormComponent,
    RolloverElectionsComponent,
    SourceElectionsComponent,
    DecemberElectionsComponent,
    WithholdingElectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
