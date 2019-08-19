import { Component } from '@angular/core';
import { GitService } from "./services/git.service"
import { GitIssue } from './classes/gitIssue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  private title = 'Irontec-Test';
  private issues: GitIssue[];
  private error: string;
  private url: string = "https://github.com/angular/angular"; 

  constructor(private service: GitService) { }

  getIssuesFromURL(): void {
    let splitUrl = this.url.split("/");
    let repository = splitUrl[splitUrl.length-1];
    let owner = splitUrl[splitUrl.length-2];

    this.service.getIssues(repository, owner)
    .subscribe(
      (result: Array<GitIssue>) => { 
        this.error = undefined;
        this.issues = result;
      },
      (error: any) => { 
        this.issues = undefined;
        this.error = "Se ha producido un error, vuelva a intentarlo.";
        console.log("Error: " + error)
      }
    )
  }

}

