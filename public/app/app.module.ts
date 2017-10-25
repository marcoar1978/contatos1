import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { Pag1Component } from './pag1/pag1.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {routing} from './app.routes';
import 'rxjs/add/operator/map';

@NgModule({ 
    imports : [BrowserModule, HttpModule,FormsModule, routing ],
    declarations : [AppComponent, CabecalhoComponent, CadastroComponent, Pag1Component],
    bootstrap : [AppComponent]
})


export class AppModule{



}