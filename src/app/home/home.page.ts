import { Component, OnInit } from '@angular/core';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx'

import { Platform, ActionSheetController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  url: any;

  constructor(private plt: Platform,
    private file: File,
    private fileopener: FileOpener,
    private photoview: PhotoViewer,
    private webview: WebView,
    private socialsharing: SocialSharing,
    private videoplayer: VideoPlayer,
    private downloader: Downloader,
    private actionSheetController: ActionSheetController) { }

  dir = [];
  dir_vid = [];
  arr = [1, 2, 4, 4, 2];
  grid_view = false;
  list_view = true;
  image_sec = true;
  video_sec = false;
  view = 'List View';
  hide = '';
  ngOnInit() {
    this.plt.ready().then(() => {
      this.file.listDir(this.file.externalRootDirectory, 'WhatsApp/Media/.Statuses').then(res => {
        for (let i = 0; i < res.length; i++) {
          const type = res[i].name;
          const arr = type.split('.');
          if (arr[1] == 'jpg') {
            const url = this.webview.convertFileSrc(res[i].nativeURL);
            this.dir.push({ name: res[i].name, url: url, nativeURL: res[i].nativeURL });
          } else if (type != '.nomedia') {
            const url = this.webview.convertFileSrc(res[i].nativeURL);
            this.dir_vid.push({ name: res[i].name, url: url, nativeURL: res[i].nativeURL });
          }
        }
        this.hide = 'hide';
      });
    });
  }

  onclick(file: any) {
    this.photoview.show(file.nativeURL);
  }


  fileopen(file: any) {
    this.fileopener.open(file.nativeURL, 'image/jpeg');
  }
  openVideo(file) {
    this.fileopener.open(file.nativeURL, 'video/mp4');
  }


  onviewChange(data) {
    if (data == 'grid') {
      this.list_view = false;
      this.grid_view = true;
      this.view = 'Grid View';
    } else {
      this.list_view = true;
      this.grid_view = false;
      this.view = 'List View';
    }
  }

  segment(data) {
    if (data == 'images') {
      this.image_sec = true;
      this.video_sec = false;
    } else {
      this.image_sec = false;
      this.video_sec = true;
    }
  }
  refresh() {
    window.location.reload();
  }

  onshare(file: any) {
    this.socialsharing.share('', null, file.nativeURL, null);
  }


  async action_sheet(data, type) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Images',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Open',
          icon: 'folder-open',
          handler: () => {
            this.fileopen(data);
          }
        },
        {
          text: 'Share',
          icon: 'share-social',
          handler: () => {
            this.onshare(data);
          }
        }, {
          text: 'Preview',
          icon: 'image',
          handler: () => {
            this.onclick(data);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }
  async action_sheet3(data) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Videos',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Open',
          icon: 'videocam',
          handler: () => {
            this.openVideo(data);
          }
        },
        {
          text: 'Share',
          icon: 'share-social',
          handler: () => {
            this.onshare(data);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

}
