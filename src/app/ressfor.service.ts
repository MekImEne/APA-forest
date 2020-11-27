import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RessforService {

  constructor(private http: HttpClient) { }

  getressfor() {
return this.http.get('http://localhost:8080/RessourcesForestieres');
  }
  saveressource(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:8080/AjouterRessource', formData);
  }
  getone(ressourceid) {
    return this.http.get('http://localhost:8080/RessourcesForestieres/' + ressourceid);
  }
}
