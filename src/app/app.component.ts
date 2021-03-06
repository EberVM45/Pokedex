import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public load:boolean;
  constructor(
    private platform:Platform,
    private splashScreen:SplashScreen,
    private statusBar:StatusBar,
    private screenOrientation:ScreenOrientation
  ) {
    this.load=false;
    this.initializeApp();
  }


  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.load=true;
      this.statusBar.overlaysWebView(false);
    })
  }
}
