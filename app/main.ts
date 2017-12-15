import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { appModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(appModule);

