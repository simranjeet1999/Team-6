import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ManageMyExpenseComponent } from './dashboard/manage-expenses/manage-my-expense/manage-my-expense.component';
import { appRoutes } from './app.routes';
import { FooterComponent } from './core/app-footer/footer/footer.component';
import { HeaderComponentComponent } from './core/app-header/header-component/header-component.component';
import { SidebarComponent } from './core/sidebar/sidebar/sidebar.component';

// import { appRoutes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    ManageMyExpenseComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
