import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-capacitores',
  templateUrl: './capacitores.page.html',
  styleUrls: ['./capacitores.page.scss'],
})
export class CapacitoresPage implements OnInit {
  public active:boolean;
  cordovaVersion:any;
  model:any;
  platform:any;
  uuid:any;
  platformVersion:any;
  manufacturer:any;
  isVirtual:any;
  serialNo:any;
  public bandera:boolean;
  constructor(
    private flashlight:Flashlight,
    public device:Device,
    public vibracion:Vibration
  ) { 
    this.active=false
    this.bandera=false
  }

  ngOnInit() {
  }

  getDeviceInfo(){
    this.bandera=true;
    this.cordovaVersion=this.device.cordova;
    this.model=this.device.model;
    this.platform=this.device.platform
    this.uuid=this.device.uuid;
    this.platformVersion=this.device.version;
    this.manufacturer=this.device.manufacturer;
    this.isVirtual=this.device.isVirtual;
    this.serialNo=this.device.serial;
  }


  flash(){
    this.active=!this.active;

    if(this.active){
      this.flashlight.switchOn();
    }else{
      this.flashlight.switchOff();
    }
  }
  vibrar(){
    this.vibracion.vibrate([2000,1000,2000]);
  }
}
