import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DeliveryAdressComponent } from './delivery-adress/delivery-adress.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { OrderChatComponent } from './order-chat/order-chat.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DeliveryAdressComponent,
    RestaurantsListComponent,
    OrderChatComponent,
    CheckoutComponent,
    AccountSettingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
