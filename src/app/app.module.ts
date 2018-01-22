import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { ChatsPage } from '../pages/chats/chats';

//For swipe cards
import { HttpModule } from '@angular/http';
import { SwipeCardsModule } from 'ng2-swipe-cards';
// import 'hammerjs';
///For swipe cards


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ProfilePage,
    ChatsPage
  ],
  imports: [
    BrowserModule,
    //For swipe cards
    HttpModule,
    SwipeCardsModule,
    ///For swipe cards
    IonicModule.forRoot(MyApp,{tabsPlacement:"top"}),
    // IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ProfilePage,
    ChatsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
