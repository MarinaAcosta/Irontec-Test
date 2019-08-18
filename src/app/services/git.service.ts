import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient){ }

  getIssues(repository: string, owner: string): Observable<any>{
    return this.http.get('https://api.github.com/repos/' + owner + '/' + repository + '/issues');
  }
}
