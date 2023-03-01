import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'interpolacion',  pathMatch: 'full'
  // },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module'),
  },
  {
    path: 'decorador',
    loadChildren: () => import('./decorador/decorador.module'),
  },
  {
    path: 'formularios',
    loadChildren: () => import('./formularios/formularios.module'),
  },
  {
    path: 'tarea',
    loadChildren: () => import('./tarea/tarea.module'),
  },
  {
    path: 'standalone',
    loadComponent: () => import('./stand-alone/stand-alone.component'),
    loadChildren: () =>
      import('./stand-alone/stand-alone.route').then((r) => r.ROUTES)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
