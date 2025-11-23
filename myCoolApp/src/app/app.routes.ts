import { Routes } from "@angular/router";

import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { SettingsComponent } from "./settings/settings.component";

export const routes: Routes = [
    { path: "", component: ProductsComponent },
    { path: "details/:id", component: ProductDetailsComponent },
    { path: "add", component: AddProductComponent },
    { path: "settings", component: SettingsComponent }
];
