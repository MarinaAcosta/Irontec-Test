import { Component, OnInit } from '@angular/core';
import { GitService } from "./services/git.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  private title = 'Irontec-Test';
  private data: any;
  private url: string = "https://github.com/angular/angular"; 

  constructor(private service: GitService) { }

  getIssuesFromURL(): void {
    let splitUrl = this.url.split("/");
    let repository = splitUrl[splitUrl.length-1];
    let owner = splitUrl[splitUrl.length-2];

    this.service.getIssues(repository, owner).subscribe(
      data => {
        this.data = data;
        console.log(data);
      }
    );
  }

}
