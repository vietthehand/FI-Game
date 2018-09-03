import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestmentsComponent } from './investments/investments.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
    children: [
      {
        path: 'investments',
        component: InvestmentsComponent
      },
      {
        path: 'characters',
        component: CharactersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule {}
