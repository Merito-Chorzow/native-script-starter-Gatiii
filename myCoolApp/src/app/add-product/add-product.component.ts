import { Component } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";

@Component({
    selector: "AddProduct",
    standalone: true,
    imports: [NativeScriptCommonModule, NativeScriptFormsModule],
    templateUrl: "./add-product.component.html",
})
export class AddProductComponent {
    name = "";
    code = "";

    save() {
        console.log("Saving:", this.name, this.code);
    }
}
