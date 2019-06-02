import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectionFormComponent } from './election-form/election-form.component';
import { SourceElectionsComponent } from './source-elections/source-elections.component';
import { DecemberElectionsComponent } from './december-elections/december-elections.component';
import { RolloverElectionsComponent } from './rollover-elections/rollover-elections.component';
import { WithholdingElectionsComponent } from './withholding-elections/withholding-elections.component';

const routes: Routes = [
  { path: '', component: ElectionFormComponent},
  { path: '', component: RolloverElectionsComponent},
  { path: '', component: SourceElectionsComponent},
  { path: '', component: DecemberElectionsComponent},
  { path: '', component: WithholdingElectionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
