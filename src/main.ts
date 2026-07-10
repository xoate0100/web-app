/**
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/web-app.component.ts`.
 */
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { provideTranslateService } from '@ngx-translate/core';

import { environment } from './environments/environment';
import { WebAppComponent } from './app/web-app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { CoreModule } from './app/core/core.module';
import { HomeModule } from './app/home/home.module';
import { LoginModule } from './app/login/login.module';
import { ProfileModule } from './app/profile/profile.module';
import { SettingsModule } from './app/settings/settings.module';
import { NavigationModule } from './app/navigation/navigation.module';
import { ClientsModule } from './app/clients/clients.module';
import { ReportsModule } from './app/reports/reports.module';
import { GroupsModule } from './app/groups/groups.module';
import { CentersModule } from './app/centers/centers.module';
import { AccountingModule } from './app/accounting/accounting.module';
import { SelfServiceModule } from './app/self-service/self-service.module';
import { SystemModule } from './app/system/system.module';
import { ProductsModule } from './app/products/products.module';
import { OrganizationModule } from './app/organization/organization.module';
import { TemplatesModule } from './app/templates/templates.module';
import { UsersModule } from './app/users/users.module';
import { NotificationsModule } from './app/notifications/notifications.module';
import { SearchModule } from './app/search/search.module';
import { CollectionsModule } from './app/collections/collections.module';
import { TasksModule } from './app/tasks/tasks.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(WebAppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
      CoreModule,
      HomeModule,
      LoginModule,
      ProfileModule,
      SettingsModule,
      NavigationModule,
      ClientsModule,
      ReportsModule,
      GroupsModule,
      CentersModule,
      AccountingModule,
      SelfServiceModule,
      SystemModule,
      ProductsModule,
      OrganizationModule,
      TemplatesModule,
      UsersModule,
      NotificationsModule,
      SearchModule,
      CollectionsModule,
      TasksModule,
      AppRoutingModule,
    ),
    provideTranslateService({
      fallbackLang: environment.defaultLanguage,
      lang: environment.defaultLanguage,
    }),
  ],
}).catch((err) => console.error(err));
