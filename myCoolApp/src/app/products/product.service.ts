import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    API_URL = "https://dummyjson.com/products";

    async getProducts() {
        const response = await fetch(`${this.API_URL}?limit=10`);
        const data = await response.json();
        return data.products;
    }

    async getProductById(id: number) {
        const response = await fetch(`${this.API_URL}/${id}`);
        const data = await response.json();
        return data;
    }
}
