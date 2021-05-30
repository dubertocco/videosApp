import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/iFIlme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo: 'Videos App1';

  listaVideos: IFilme[] = [
    {
      nome: 'Um Sonho de Liberdade',
      lancamento: '1994',
      duracao: '2h 22m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/4BSuFpQ2gd2WtO5ZK1fMjaMPMRc.jpg',
      generos: ['Drama', 'Crime'],
      pagina: '/um-sonho-de-liberdade'
    },
    {
      nome: 'À Espera de Um Milagre ',
      lancamento: '1999',
      duracao: '3h 9m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/2RKjFMIlb3UmvUtxeM1uzS0WMhG.jpg',
      generos: ['Fantasia', 'Drama', 'Crime'],
      pagina: '/um-sonho-de-liberdade'
    },
    {
      nome: 'A Vida é Bela',
      lancamento: '1997',
      duracao: '1h 56m',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w220_and_h330_face/h8PEObIiYUo4wHGo2qgWge2wqzv.jpg',
      generos: ['Comédia', 'Drama'],
      pagina: 'a-vida-e-bela'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar ',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
