import { Routes } from '@angular/router';

import { UserNewComponent } from './user-new.component';
import { UserEditComponent } from './user-edit.component';
import { UserViewComponent } from './user-view.component';

export const routesUser: Routes = [
        { path: 'new', component: UserNewComponent },
        { path: 'edit', component: UserEditComponent },
        { path: 'view', component: UserViewComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'new' }
];