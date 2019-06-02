import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule }   from '@angular/forms';


import { DataService } from './search/data.service';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';


const routes =[
  {path: '', component: SearchComponent},
  {path: 'form', component: FormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
