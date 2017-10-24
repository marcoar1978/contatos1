
import {RouterModule, Routes} from '@angular/router';

import { Pag1Component } from './pag1/pag1.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes:Routes = [
    {path: '', component:Pag1Component},
    {path: 'cadastro', component: CadastroComponent},
    

];


export const routing = RouterModule.forRoot(appRoutes);