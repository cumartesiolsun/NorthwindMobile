import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductPage } from '../pages/product/product';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { CartService } from "../providers/cart.service";
import { CartPage } from "../pages/cart/cart";
import { ActionSheetPage } from "../pages/action-sheet/action-sheet";
import { AlertPage } from "../pages/alert/alert";
import { BadgePage } from "../pages/badge/badge";
import { ButtonPage } from "../pages/button/button";
import { CheckboxPage } from "../pages/checkbox/checkbox";
import { DatetimePage } from "../pages/datetime/datetime";
import { FabsPage } from "../pages/fabs/fabs";
import { GesturesPage } from "../pages/gestures/gestures";
import { InputPage } from "../pages/input/input";
import { ListdemoPage } from "../pages/listdemo/listdemo";
import { LoadingPage } from "../pages/loading/loading";
import { SliderPage } from "../pages/slider/slider";
import { CallnumberPage } from "../pages/callnumber/callnumber";
import { BatteryPage } from "../pages/battery/battery";
import { CameraPage } from "../pages/camera/camera";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    CartPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CheckboxPage,
    DatetimePage,
    FabsPage,
    GesturesPage,
    InputPage,
    ListdemoPage,
    LoadingPage,
    SliderPage,
    CallnumberPage,
    BatteryPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    ProductDetailPage,
    CartPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CheckboxPage,
    DatetimePage,
    FabsPage,
    GesturesPage,
    InputPage,
    ListdemoPage,
    LoadingPage,
    SliderPage,
    CallnumberPage,
    BatteryPage,
    CameraPage
  ],
  providers: [
    CartService,
    { provide: "apiUrl", useValue: "http://northwindapi.azurewebsites.net/api" },
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
