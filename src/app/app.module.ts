import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DeliveryAdressComponent } from './delivery-adress/delivery-adress.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { OrderChatComponent } from './order-chat/order-chat.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { FooterComponent } from './footer/footer.component';
import {menuItemService} from '../app/service/menuItems.service'
import {UsersService} from '../app/service/users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

const appRoutes: Routes = [
  { path : '', component : HomeComponent,
    children:[{path:'', component:LoginComponent},
    {path:'signIn', component:SigninComponent}]},
    {path : 'restaurants', component :  RestaurantsListComponent},
    {path:'deliveryAddress', component:DeliveryAdressComponent},
    {path:'menu/ID/:i',component:MenuItemsComponent},
    {path:'order',component:CheckoutComponent}
     
  ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    DeliveryAdressComponent,
    RestaurantsListComponent,
    OrderChatComponent,
    CheckoutComponent,
    AccountSettingsComponent,
    SigninComponent,
    HomeComponent,
    MenuItemsComponent,
    FooterComponent
  ],
  entryComponents:[AccountSettingsComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [menuItemService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
