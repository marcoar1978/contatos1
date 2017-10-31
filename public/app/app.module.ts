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

import {Contato } from './entidades/contato.service';
import {ContatoDAO } from './entidades/contatoDAO.service';

@NgModule({ 
    imports : [BrowserModule, HttpModule,FormsModule, routing ],
    declarations : [AppComponent, CabecalhoComponent, CadastroComponent, Pag1Component],
    providers: [Contato, ContatoDAO],
    bootstrap : [AppComponent]
})


export class AppModule{



}