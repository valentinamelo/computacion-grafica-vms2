import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CascadeSelect } from 'primeng/cascadeselect';

@Component({
    selector: 'app-select-list',
    templateUrl: './select-list.html',
    styleUrl: './select-list.css',
    standalone: true,
    imports: [FormsModule, CascadeSelect]
})
export class SelectList implements OnInit {
    products: any[] | undefined;

    selectedProduct: any;

    ngOnInit() {
        this.products = [
            {
                name: 'Pastel',
                code: 'pst',
                flavors: [
                    {
                        name: 'Pastel de vainilla',
                        rellenos: [
                            { cname: 'Pastel de vainilla relleno de queso crema', code: 'V-q' },
                            { cname: 'Pastel de vainilla relleno de chocolate blanco', code: 'V-c' }
                        ]
                    },
                    {
                        name: 'Pastel de chocolate',
                        rellenos: [
                            { cname: 'Pastel de chocolate relleno de queso crema', code: 'C-q' },
                            { cname: 'Pastel de chocolate relleno de chocolate blanco', code: 'C-c' }
                        ]
                    }
                ]
            },
            {
                name: 'Galletas x5',
                code: 'galletas',
                flavors: [
                    {
                        name: 'Galletas red velvet',
                        rellenos: [
                            { cname: 'Galletas red velvet rellenas de queso crema', code: 'RV-q' },
                            { cname: 'Galletas red velvet rellenas de chocolate blanco', code: 'RV-c' }
                        ]
                    },
                    {
                        name: 'Galletas chips de chocolate',
                        rellenos: [
                            { cname: 'Galletas chips rellenas de queso crema', code: 'CC-q' },
                            { cname: 'Galletas chips rellenas de chocolate blanco', code: 'CC-c' }
                        ]
                    }
                ]
            }
        ];
    }
}