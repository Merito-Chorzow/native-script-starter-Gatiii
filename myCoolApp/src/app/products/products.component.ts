import { Component, OnInit } from "@angular/core";
import {
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    RouterExtensions
} from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { ProductService } from "./product.service";

@Component({
    selector: "Products",
    standalone: true,
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    templateUrl: "./products.component.html",
})
export class ProductsComponent implements OnInit {

    products: any[] = [];
    loading = true;
    error: string | null = null;

    constructor(
        private productService: ProductService,
        private router: RouterExtensions,
        private page: Page
    ) {}

    ngOnInit() {
        // Odpala SIĘ ZA KAŻDYM razem kiedy wracasz na ten widok
        this.page.on(Page.navigatingToEvent, () => {
            this.loadProducts();
        });

        // pierwsze ładowanie
        this.loadProducts();
    }

    async loadProducts() {
        this.loading = true;

        try {
            this.products = await this.productService.getProducts();
            this.error = null;
        } catch (e) {
            this.error = "Błąd podczas pobierania listy.";
        }

        this.loading = false;
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
