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
    return this.http.get('api/feedbacks')
  }
  fetchApprovedFeedbacks(): Observable<any>{
    return this.http.get('api/feedbacks/approved')
  }

  addFeedback(feedback: Feedback): Observable<any>{
    return this.http.post('api/feedbacks', feedback)
  }
}
