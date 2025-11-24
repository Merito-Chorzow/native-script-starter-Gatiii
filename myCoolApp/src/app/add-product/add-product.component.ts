import { Component } from "@angular/core";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,   // <-- DODANE
  RouterExtensions
} from "@nativescript/angular";

import { ImageSource } from "@nativescript/core";
import * as camera from "@nativescript/camera";
import { ProductService } from "../products/product.service";

@Component({
  selector: "AddProduct",
  standalone: true,
  imports: [NativeScriptCommonModule, NativeScriptFormsModule],
  templateUrl: "./add-product.component.html",
})
export class AddProductComponent {

  title = "";
  description = "";
  photo: string | null = null;
  error: string | null = null;

  constructor(
    private router: RouterExtensions,
    private productService: ProductService
  ) {}

  async takePhoto() {
    try {
      await camera.requestPermissions();

      const imgAsset = await camera.takePicture({
        width: 1000,
        height: 1000,
        keepAspectRatio: true
      });

      const img = await ImageSource.fromAsset(imgAsset);
      this.photo = img.toBase64String("jpeg");

    } catch (e) {
      console.log("Camera error:", e);
      this.error = "Nie udało się zrobić zdjęcia";
    }
  }

  addProduct() {
    this.productService.addLocalProduct(
      this.title,
      this.description,
      this.photo
    );

    this.router.navigate(["/"]);
  }
}
