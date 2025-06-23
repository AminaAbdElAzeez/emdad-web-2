import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  BarChartOutline,
  DownOutline,
  UserOutline,
} from '@ant-design/icons-angular/icons';
import { MenuOutline, CloseOutline } from '@ant-design/icons-angular/icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(BrowserAnimationsModule),
    {
      provide: NZ_ICONS,
      useValue: [
        UserOutline,
        MenuOutline,
        CloseOutline,
        DownOutline,
        BarChartOutline,
      ],
    },
  ],
};
