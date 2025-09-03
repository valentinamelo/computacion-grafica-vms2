import { Component } from "@angular/core";

/* decorador */ 
@Component ({
    selector: 'personas-app',
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css'
})

export class MiComponentePersona {
    public mensaje = 'mi mensaje'
    public otro_mensaje = 'mi segundo mensaje' 
}
