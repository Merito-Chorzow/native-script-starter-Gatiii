import { Component, OnInit } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";
import { RouterExtensions } from "@nativescript/angular";
import { ProductService } from "./product.service";

@Component({
    selector: "Products",
    standalone: true,
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ],
    templateUrl: "./products.component.html",
})
export class ProductsComponent implements OnInit {

    products: any[] = [];
    loading = true;
    error: string | null = null;

    constructor(
        private productService: ProductService,
        private router: RouterExtensions
    ) {}

    async ngOnInit() {
        try {
            this.products = await this.productService.getProducts();
        } catch (err) {
            this.error = "Nie udało się pobrać produktów.";
        } finally {
            this.loading = false;
        }
    }

    onItemTap(event: any) {
        const product = this.products[event.index];
        this.router.navigate(["/details", product.id]);
    }

    goToAdd() {
        this.router.navigate(["/add"]);
    }

    goToSettings() {
        this.router.navigate(["/settings"]);
    }
}
