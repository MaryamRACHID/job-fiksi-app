// src/app/app.module.ts
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Module de routage principal
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { OffersComponentsModule } from './offers-components/offers-components.module';
import { ProfileComponentsModule } from './profile-components/profile-components.module';
import { MaterialModule } from './material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MessagerieModule} from './messagerie/messagerie.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './intercepteurs/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule, // Import du module de routage principal
    SharedModule, // Module partagé (importé pour les composants/utilitaires partagés)
    PagesModule, // Module des pages principales
    MessagerieModule,
    OffersComponentsModule, // Module pour les composants d'offres
    ProfileComponentsModule, // Module pour les composants de profil
    MaterialModule, // Module pour Angular Material
    MatButtonToggleModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }) // Configuration du Service Worker pour les PWA
  ],
  bootstrap: [AppComponent], // Démarrage de l'application avec AppComponent comme composant racine
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppModule {}
