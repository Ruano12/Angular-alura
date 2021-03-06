import { Component, Input, EventEmitter, Output } from '@angular/core';

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
    @Output() acao = new EventEmitter();
    @Input() confirmacao : boolean = false;

    executaAcao(){
        if(this.confirmacao){
            if(confirm('Deseja Excluir?')){
                this.acao.emit(null);
            }
            return;
        }
        this.acao.emit(null);
    }
}