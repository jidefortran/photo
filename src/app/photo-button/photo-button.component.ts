import { PhotoServiceService } from './../photo-service.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-photo-button',
  templateUrl: './photo-button.component.html',
  styleUrls: ['./photo-button.component.css']
})
export class PhotoButtonComponent implements OnInit {
  photoUrl: string;
  photoName: string;
  portfolio: string;


  constructor(private photoService: PhotoServiceService) {
    this.fetchPhoto();

  }
  onClick() {
    this.fetchPhoto();

  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular;
      this.photoName = response.user.name;
      this.portfolio = response.user.portfolio_url;

    });
  }

  ngOnInit(): void {
  }

}
