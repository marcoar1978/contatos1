import {Component} from '@angular/core';

import {Contato} from "../entidades/contato.service";

import {ContatoDAO} from "../entidades/contatoDAO.service";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl : './cadastro.component.html';

})

export class CadastroComponent{

    contato:Contato;
    contatoDAO:ContatoDAO;
    
    constructor(contato:Contato,contatoDAO:ContatoDAO ){
         this.contato = contato;
         this.contatoDAO = contatoDAO;
          }

 
    cadastrar(event){
        event.preventDefault();
        this.contatoDAO.cadastra(this.contato).subscribe(() => {console.log(this.contato)});
        
        }      
}