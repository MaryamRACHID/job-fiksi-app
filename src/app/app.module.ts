import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { OffersComponentsModule } from './offers-components/offers-components.module';
import { ProfileComponentsModule } from './profile-components/profile-components.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatChipsModule } from '@angular/material/chips';
import { ProfileRestaurantComponent } from './pages/profile-restaurant/profile-restaurant.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    OffersComponentsModule,
    ProfileComponentsModule,
    MatChipsModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  declarations: [
    AppComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ] // Composant racine pour démarrer l'application
})
export class AppModule {}
