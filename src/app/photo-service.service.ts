import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface UnspashResponse {
  urls: {
    regular: string;
  };
  user: {
    name: string;
    portfolio_url: string;
  };

}



@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {


  constructor(private http: HttpClient) {

  }
  getPhoto() {
    return this.http.get<UnspashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID VGEqC0D76e_AXqUnkzljAqguRHUFJUTD1NqTeinI4IQ'
      }
    });
  }
}
