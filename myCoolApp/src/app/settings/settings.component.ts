import { Component } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

@Component({
    selector: "Settings",
    standalone: true,
    imports: [NativeScriptCommonModule],
    templateUrl: "./settings.component.html",
})
export class SettingsComponent {}
