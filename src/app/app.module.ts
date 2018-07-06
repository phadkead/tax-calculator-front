import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TaxTableComponent} from './tax-table/tax-table.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './tax-table/interceptor/token.interceptor';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

const appRoutes: Routes = [
  {path: '', component: TaxTableComponent},
  {path: 'taxes', component: TaxTableComponent},
  {path: 'taxes/history', component: TaxTableComponent} // TODO
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
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule],
  providers: [
    [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}]
  ],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatInputModule, MatListModule, MatCardModule],
})
export class AppModule {
}
