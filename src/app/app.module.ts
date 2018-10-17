import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlansListComponent } from './component/plans-list/plans-list.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';

const paths: Routes = [
  { path: 'listPlans', component: PlansListComponent },
  { path: 'addCustomer/:id', component: CustomerFormComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    PlansListComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
