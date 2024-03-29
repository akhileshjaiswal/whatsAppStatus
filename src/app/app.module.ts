import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { File } from '@ionic-native/file/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx'
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx'
import { WebView } from '@ionic-native/ionic-webview/ngx'
import { SocialSharing } from '@ionic-native/social-sharing/ngx'
import { VideoPlayer } from '@ionic-native/video-player/ngx'
import { Downloader } from '@ionic-native/downloader/ngx'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    FileOpener,
    PhotoViewer,
    WebView,
    VideoPlayer,
    Downloader,
    SocialSharing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
