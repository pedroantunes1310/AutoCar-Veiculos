import { Component, inject, signal, TemplateRef, WritableSignal } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-component',
  imports: [NgbDatepickerModule],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent {
  private modalService = inject(NgbModal);
  closeResult: WritableSignal<string> = signal('');

  // Criando propriedades para armazenar os valores do formulário
  nome: string = '';
  email: string = '';
  mensagem: string = '';

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult.set(`Closed with: ${result}`);
      },
      (reason) => {
        this.closeResult.set(`Dismissed ${this.getDismissReason(reason)}`);
      },
    );
  }

  // Função chamada ao clicar em "Enviar Mensagem"
  enviarMensagem() {
    // Aqui você pode processar os dados, exibir no console ou enviar para um serviço
    console.log('Nome:', this.nome);
    console.log('Email:', this.email);
    console.log('Mensagem:', this.mensagem);

    // Lógica para fechar o modal após o envio, se necessário
    this.modalService.dismissAll();

    // Exemplo de alerta simples (pode ser substituído por qualquer outra ação)
    alert('Mensagem enviada com sucesso!');
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
