import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent{

    
    @Input() nome: String = 'Ok';
    @Input() estilo: String = 'btn-default';
    @Input() tipo: String = 'button';
    @Input() desabilitado: boolean = false;
}