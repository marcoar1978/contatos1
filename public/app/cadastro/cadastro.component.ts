import {Component} from '@angular/core';

import {Contato} from "../entidades/contato.service";

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl : './cadastro.component.html';

})

export class CadastroComponent{

    contato:Contato;
    
    constructor(contato:Contato){
         this.contato = contato;
         
          }



}