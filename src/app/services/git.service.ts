import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitIssue } from '../classes/gitIssue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  private _issues : GitIssue[]; 

  constructor(private http: HttpClient){ }

  getIssues(repository: string, owner: string): Observable<Object>{
    return this.http.get('https://api.github.com/repos/' + owner + '/' + repository + '/issues')
  }
}

