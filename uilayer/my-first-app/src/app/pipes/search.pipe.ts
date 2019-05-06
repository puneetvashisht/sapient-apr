import { Pipe, PipeTransform } from '@angular/core';
import { Feedback } from '../models/feedback';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(feedbacks: Array<Feedback>, searchStr: string) {


        let filteredFeedbacks = feedbacks.filter(feedback => feedback.description.includes(searchStr));
        return filteredFeedbacks;
        
    }

}