import { Component } from '@angular/core';
import { HttpServiceService } from '../../services/httpServices/http-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-http-client',
  imports: [CommonModule,],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css'
})
export class HttpClientComponent {
  constructor(private httpService: HttpServiceService) { }
  posts: any[] = [];

  ngOnInit(): void {
    this.httpService.getPosts().subscribe((data) => {
      this.posts = data;
    });

    const newPost = { title: 'Nouveau Post', body: 'Contenu' };
    this.httpService.addPost(newPost).subscribe((response) => {
      console.log('Post ajouté :', response);
    });
  }
}
