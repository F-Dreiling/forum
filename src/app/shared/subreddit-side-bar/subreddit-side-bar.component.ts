import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';
import { SubredditModel } from '../subreddit-model';

@Component({
  selector: 'app-subreddit-side-bar',
  templateUrl: './subreddit-side-bar.component.html',
  styleUrl: './subreddit-side-bar.component.css'
})
export class SubredditSideBarComponent implements OnInit {

  subreddits: Array<SubredditModel> = [];
  displayViewAll: boolean = false;

  constructor(private subredditService: SubredditService) {

    this.subredditService.getAllSubreddits().subscribe(subreddit => {
      if (subreddit.length > 3) {
        this.subreddits = subreddit.splice(0, 3);
        this.displayViewAll = true;
      } else {
        this.subreddits = subreddit;
      }
    });

  }

  ngOnInit(): void {
      
  }

}
