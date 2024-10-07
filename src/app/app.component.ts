import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiserviceService } from './service/apiservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  listadeTareas: string[] = [];
  nuevatarea: string = '';
  private apiservice = inject(ApiserviceService);
  ngOnInit(): void {
    this.listadeTareas = this.apiservice.getTareas();
  }
  agregarTarea() {
    this.apiservice.agregarTarea(this.nuevatarea);
    this.nuevatarea = '';
    this.listadeTareas = this.apiservice.getTareas();
  }
  eliminarTarea(index: number) {
    this.apiservice.eliminarTarea(index);
    this.listadeTareas = this.apiservice.getTareas();
  }
}
