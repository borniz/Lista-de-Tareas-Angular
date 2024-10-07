import { Injectable } from '@angular/core';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
  private _localStorageKey = 'listaTareas';

  getTareas(): string[] {
  return (
      JSON.parse(localStorage.getItem(this._localStorageKey) as string) || []
    );
  }

  agregarTarea(tareas: string) {
    const tarea = this.getTareas();
    tarea.push(tareas);
    localStorage.setItem(this._localStorageKey, JSON.stringify(tarea));
  }
  eliminarTarea(index: number) {
    const tarea = this.getTareas();
    tarea.splice(index, 1);
    localStorage.setItem(this._localStorageKey, JSON.stringify(tarea));
  }
}
