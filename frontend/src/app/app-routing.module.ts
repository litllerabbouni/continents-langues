import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentFormComponent } from './components/continent-form/continent-form.component';
import { ContinentListComponent } from './components/continent-list/continent-list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: "full",
        component: ContinentListComponent
    },

    {
        path: 'continent',
        pathMatch: "full",
        component: ContinentListComponent
    },

    {
        path: 'continent/create',
        component: ContinentFormComponent
    },

    {
        path: 'continent/edit/:id',
        component: ContinentFormComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
