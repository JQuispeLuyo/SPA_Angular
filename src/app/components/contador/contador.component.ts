import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: []
})
export class ContadorComponent implements OnInit {
  @ViewChild('inputProgress', {static:false}) inputProgress: ElementRef; 
  @Input() cantidadProgress: number = 20;
  @Output() newVal = new EventEmitter<number>(); 

  constructor() { }

  ngOnInit() {
  }


  update($event: number){

    // let val:any = document.getElementById("cantidadProgress");

    this.cantidadProgress = $event;
    if($event > 100){
      this.cantidadProgress = 100;
    }else if($event < 0 || $event == null){
      this.cantidadProgress = 0;
    }else{
      this.cantidadProgress = $event;
    }
    console.log(this.cantidadProgress);

    // val.value = this.cantidadProgress;
    this.inputProgress.nativeElement.value = this.cantidadProgress;
    this.newVal.emit(this.cantidadProgress);
  }

  actualizar(valor: number){
    console.log("Entras");
  
    this.cantidadProgress = this.cantidadProgress + valor;

    if(this.cantidadProgress > 100){
      this.cantidadProgress = 100;
    }
    
    if(this.cantidadProgress < 0){
      this.cantidadProgress = 0;
    }
    console.log(this.cantidadProgress);

    this.inputProgress.nativeElement.focus();

    this.newVal.emit(this.cantidadProgress);
  }

}
