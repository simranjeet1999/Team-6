import { Routes } from '@angular/router';
import { ManageMyExpenseComponent } from './dashboard/manage-expenses/manage-my-expense/manage-my-expense.component';
import { FooterComponent } from './core/app-footer/footer/footer.component';


export const appRoutes: Routes = [
    {
      path: 'dashboard',
      component: ManageMyExpenseComponent,
 
    },
   
]