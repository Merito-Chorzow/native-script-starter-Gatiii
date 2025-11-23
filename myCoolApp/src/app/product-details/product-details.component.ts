import { Component, OnInit } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../products/product.service";

@Component({
    selector: "ProductDetails",
    standalone: true,
    imports: [NativeScriptCommonModule],
    templateUrl: "./product-details.component.html",
})
export class ProductDetailsComponent implements OnInit {

    product: any = null;
    loading = true;
    error: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {}

    async ngOnInit() {
        const id = Number(this.route.snapshot.params["id"]);

        try {
            this.product = await this.productService.getProductById(id);
        } catch (e) {
            this.error = "Nie udało się pobrać szczegółów produktu.";
        } finally {
            this.loading = false;
        }
    }
}
