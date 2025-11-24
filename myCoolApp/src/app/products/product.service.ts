import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ProductService {

    private API_URL = "https://dummyjson.com/products";
    private localProducts: any[] = [];

    async getProducts() {
        const response = await fetch(`${this.API_URL}?limit=10`);
        const data = await response.json();

        return [...this.localProducts, ...data.products];
    }

    async getProductById(id: number) {
        const local = this.localProducts.find(p => p.id === id);
        if (local) return local;

        const response = await fetch(`${this.API_URL}/${id}`);
        return response.json();
    }

    addLocalProduct(title: string, description: string, photo?: string | null) {
        const newProduct = {
            id: Date.now(),
            title,
            description,
            thumbnail: photo || null,

            // pola potrzebne, aby szczegóły nie były undefined
            price: 0,
            brand: "Lokalny produkt",
            category: "Local",
            images: photo ? [photo] : []
        };

        this.localProducts.unshift(newProduct);
    }
}
