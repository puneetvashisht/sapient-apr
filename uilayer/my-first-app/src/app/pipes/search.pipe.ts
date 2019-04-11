import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(employees: Array<Employee>, empname: string) {


        let filteredEmployees = employees.filter(emp => emp.name.includes(empname));
        console.log(employees, empname);
        return filteredEmployees;
        
    }

}