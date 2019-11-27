import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DeliveryAdressComponent } from './delivery-adress/delivery-adress.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { OrderChatComponent } from './order-chat/order-chat.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

const appRoutes: Routes = [
  { path : '', component : HomeComponent,
    children:[{path:'', component:LoginComponent},
    {path:'signIn', component:SigninComponent}]},
    {path : 'restaurants', component :  RestaurantsListComponent},
    {path:'deliveryAddress', component:DeliveryAdressComponent},
    {path:'menu/ID/:i',component:MenuItemsComponent}
     
  ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DeliveryAdressComponent,
    RestaurantsListComponent,
    OrderChatComponent,
    CheckoutComponent,
    AccountSettingsComponent,
    SigninComponent,
    HomeComponent,
    MenuItemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
