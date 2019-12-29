import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { SettingsService } from './../../services/index.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: []
})
export class AcountSettingsComponent implements OnInit {

  constructor(
      private _ajustes: SettingsService
  ) { }

  ngOnInit() {
    this.cargarCheck();
  }

  cambiarTema(tema: string, link: ElementRef) {
    this.aplicarCheck(link);
    this._ajustes.cambiarTema(tema);
  }

  aplicarCheck(link: any) {
    let selectores: any = document.getElementsByClassName("selector");
    for (let ref of selectores) {
      ref.classList.remove("working");
    }

    link.classList.add("working");
  }

  cargarCheck(){
    let selectores: any = document.getElementsByClassName("selector");

    let tema = this._ajustes.ajustes.tema;

    for (let ref of selectores) {
      if(ref.getAttribute('data-theme') === tema){
        ref.classList.add("working");
        break;
      }
    }
  }

}
