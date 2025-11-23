import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    API_URL = "https://dummyjson.com/products?limit=10";

    async getProducts() {
        const response = await fetch(this.API_URL);
        const data = await response.json();
        return data.products; // lista produktów
    }
}
