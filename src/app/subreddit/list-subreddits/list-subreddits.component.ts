import { Component, OnInit } from '@angular/core';
import { SubredditModel } from '../../shared/subreddit-model';
import { SubredditService } from '../../shared/subreddit.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-list-subreddits',
  templateUrl: './list-subreddits.component.html',
  styleUrls: ['./list-subreddits.component.css']
})
export class ListSubredditsComponent implements OnInit {

  subreddits: Array<SubredditModel> = [];
  constructor(private subredditService: SubredditService) { }

  ngOnInit() {

    this.subredditService.getAllSubreddits().subscribe(subreddit => {
      this.subreddits = subreddit;
    }, error => {
      throwError(error);
    })

  }

}