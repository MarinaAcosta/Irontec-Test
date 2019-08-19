import { Component } from '@angular/core';
import { GitService } from "./services/git.service"
import { GitIssue } from './classes/gitIssue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  private _title = 'Welcome to Irontec-Test by Marina Acosta';
  private _instructions = 'Please enter the repository URL';
  private _issues: GitIssue[];
  private _error: string;
  private _url: string = "https://github.com/angular/angular"; 

  constructor(private service: GitService) { }

  getIssuesFromURL(): void {
    let splitUrl = this._url.split("/");
    let repository = splitUrl[splitUrl.length-1];
    let owner = splitUrl[splitUrl.length-2];

    this.service.getIssues(repository, owner)
    .subscribe(
      (result: Array<GitIssue>) => { 
        this._error = undefined;
        this._issues = result;
      },
      (error: any) => { 
        this._issues = undefined;
        this._error = "An error has occurred, try again.";
        console.log("Error: " + error)
      }
    )
  }

}

