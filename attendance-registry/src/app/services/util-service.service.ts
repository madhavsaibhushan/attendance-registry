import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loading: any;

  constructor(private toastController: ToastController,
    private loadingController: LoadingController) { }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async presentLoading(close = false) {
return  this.loadingController.create({
      message: 'Please wait...',
    });
  }
}
