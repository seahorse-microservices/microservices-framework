import { provideHttpClient} from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

export const applicationConfig: ApplicationConfig = {
  providers: [provideHttpClient() ],
};
