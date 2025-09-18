import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
// import { Ripple } from 'primeng/ripple';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.html',
    standalone: true,
    imports: [Toast, ButtonModule],
    providers: [MessageService]
})
export class ToastApp {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Calificación enviada correctamente', life: 3000 });
    }
}