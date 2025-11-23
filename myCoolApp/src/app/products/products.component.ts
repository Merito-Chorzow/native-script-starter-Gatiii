import { Component } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";

@Component({
    selector: "Products",
    standalone: true,
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    templateUrl: "./products.component.html",
})
export class ProductsComponent {

    products = [
        { id: 1, name: "Mleko", code: "A1" },
        { id: 2, name: "Chleb", code: "B2" }
    ];

    onItemTap(event: any) {
        const item = this.products[event.index];
        console.log("Tapped:", item);
    }
}
