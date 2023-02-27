import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoradorInputComponent } from './decorador-input/decorador-input.component';
import { DecoradorOutputComponent } from './decorador-output/decorador-output.component';
import { DecoradorComponent } from './decorador.component';

const routes: Routes = [
  {
    path: '',
    component: DecoradorComponent,
    // children: [
    //   {
    //     path: 'input',
    //     component: DecoradorInputComponent
    //   },
    //   {
    //     path: 'output',
    //     component: DecoradorOutputComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoradorRoutingModule { }
