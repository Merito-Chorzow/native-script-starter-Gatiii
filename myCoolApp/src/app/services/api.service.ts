import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ApiService {

    async getProducts() {
        try {
            const response = await fetch("https://fakestoreapi.com/products");

            if (!response.ok) {
                throw new Error("Błąd API");
            }

            return await response.json();
        } catch (e) {
            console.log("API ERROR:", e);
            throw e;
        }
    }
}
