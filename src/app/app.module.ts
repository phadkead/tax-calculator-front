import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {TaxTableComponent} from './tax-table/tax-table.component';
import {MainComponent} from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: TaxTableComponent},
  {path: 'taxes', component: TaxTableComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TaxTableComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
