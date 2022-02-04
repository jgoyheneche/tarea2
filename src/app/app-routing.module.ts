import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'personajes', loadChildren: () => import('./personajes/personajes.module').then(m => m.PersonajesModule) },
  { path: 'casas', loadChildren: () => import('./casas/casas.module').then(m => m.CasasModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
