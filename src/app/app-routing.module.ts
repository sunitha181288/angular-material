import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTitleComponent } from './home-title/home-title.component';

const routes: Routes = [{ path: '', component: HomeTitleComponent },
                        { path: '**', redirectTo: '/' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
