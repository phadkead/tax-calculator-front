import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TaxTableComponent} from './tax-table/tax-table.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './tax-table/interceptor/token.interceptor';

const appRoutes: Routes = [
  {path: '', component: TaxTableComponent},
  {path: 'taxes', component: TaxTableComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaxTableComponent
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
  providers: [
    [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true } ]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
