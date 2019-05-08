import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  fetchAllFeedbacks(): Observable<any>{
    return this.http.get('http://localhost:8080/api/feedbacks')
  }
  fetchApprovedFeedbacks(): Observable<any>{
    return this.http.get('http://localhost:8080/api/feedbacks/approved')
  }

  addFeedback(feedback: Feedback): Observable<any>{
    return this.http.post('http://localhost:8080/api/feedbacks', feedback)
  }
}
