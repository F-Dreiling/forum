import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PostModel } from '../post-model';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrl: './post-tile.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PostTileComponent implements OnInit {

  @Input() posts: Array<PostModel> = [];

  faComments = faComments;

  constructor(private postService: PostService, private router: Router) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit(): void {
    
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }
  
}
