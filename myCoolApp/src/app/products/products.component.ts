import { Component, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { RouterExtensions } from "@nativescript/angular";
import { ProductService } from "./product.service";

@Component({
    selector: "Products",
    standalone: true,
    imports: [NativeScriptCommonModule],
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
            this.loading = false;
        } catch (err) {
            this.error = "Nie udało się pobrać produktów.";
            this.loading = false;
        }
    }

    openDetails(id: number) {
        this.router.navigate(["/details", id]);
    }

    goToAdd() {
        this.router.navigate(["/add"]);
    }

    goToSettings() {
        this.router.navigate(["/settings"]);
    }
}
