import { Component, OnInit, signal } from '@angular/core';
import { interval } from 'rxjs';

export interface EventoToast {
  mensagem: string,
  erro: boolean,
  id?: number,
  timeout?: any
}

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast implements OnInit {

  mensagens = signal<EventoToast[]>([])
  ultimoId = 1

  ngOnInit(): void {
    const body = document.querySelector("body")
    console.log('Body', body)
    body?.addEventListener('toast-mensagem', (evt: any) => {
      const id = this.ultimoId++
      const timeout = setTimeout(() => this.fecharToast(id), 2000) 
      const eventoDados: EventoToast = {...evt.detail, id, timeout}

      this.mensagens.set([...this.mensagens(), eventoDados])


    })
  }

  fecharToast(id: number) {
    const obj = this.mensagens().find(m => m.id === id)
    clearTimeout(obj?.timeout)

    const novoArray = this.mensagens().filter(m => m.id !== id)
    this.mensagens.set(novoArray)
  }
}
