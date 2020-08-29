import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {SocialSharing} from '@ionic-native/social-sharing/ngx'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  backButtonSubscription: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private socialsharing:SocialSharing,
    private menu:MenuController,
    private route:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }
  ngOnInit() { }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  exit() {
    navigator['app'].exitApp();
  }

  howto(){
    this.menu.close();
    this.route.navigateByUrl('/slide');
  }

  onshareURL(url="Status Sharer By: Akhilesh Jaiswal") {
    this.socialsharing.share(url, null, null, null);
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }



}
