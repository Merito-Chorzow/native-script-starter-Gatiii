import { Component } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

@Component({
    selector: "ProductDetails",
    standalone: true,
    imports: [NativeScriptCommonModule],
    templateUrl: "./product-details.component.html",
})
export class ProductDetailsComponent {}
