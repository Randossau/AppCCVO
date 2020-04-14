 
// >> sidedrawer-getting-started-binding-context
import { GettingStartedViewModel } from "./accueil.component";
import { Page } from "tns-core-modules/ui/page";

export function pageLoaded(args) {
    let page = args.object as Page;
    page.bindingContext = new GettingStartedViewModel();
}
// << sidedrawer-getting-started-binding-context