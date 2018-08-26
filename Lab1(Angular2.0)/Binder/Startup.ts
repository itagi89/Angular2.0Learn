import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModuleLibrary } from '../Binder/MainModuleLibrary';
const platform = platformBrowserDynamic();
platform.bootstrapModule(MainModuleLibrary);
