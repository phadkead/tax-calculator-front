import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TaxTableComponent} from './tax-table/tax-table.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptor/token.interceptor';
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
import {TaxHistoryComponent} from './tax-history/tax-history.component';
import {TokenAuthGuard} from './tax-table/service/tokenguard.service';

const appRoutes: Routes = [
  {path: '', component: TaxTableComponent},
  {path: 'history', component: TaxHistoryComponent, canActivate: [TokenAuthGuard]},
  {path: 'taxes', component: TaxTableComponent, canActivate: [TokenAuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    TaxTableComponent,
    TaxHistoryComponent
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
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
  ],
  providers: [
    TokenAuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatInputModule, MatListModule, MatCardModule],
})
export class AppModule {
}
