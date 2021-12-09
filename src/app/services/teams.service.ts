import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AddTeamRequest} from '../pages/teams/models/teams.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private url = environment.API_URL;

  constructor(
    private httpClient: HttpClient,
  ) {}

  public getUserTeams(username: string): Observable<any> {
    return this.httpClient.get(`${this.url}/teams/${username}`)
  }

  public addNewTeam(newTeamRequest: AddTeamRequest): Observable<any> {
    return this.httpClient.post(`${this.url}/teams/add`, newTeamRequest)
  }
}
