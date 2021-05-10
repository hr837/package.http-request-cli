/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { EmployeeSalaryController } from '../../controller/xbt-platform-salary-service/employee-salary.controller'

export class EmployeeSalaryService {
    /**
     * create
     */
    @Request({
        server: EmployeeSalaryController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * delete
     */
    @Request({
        server: EmployeeSalaryController.delete
    })
    public delete(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * get All
     */
    @Request({
        server: EmployeeSalaryController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne
     */
    @Request({
        server: EmployeeSalaryController.getByEmployee
    })
    public getByEmployee(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne
     */
    @Request({
        server: EmployeeSalaryController.get
    })
    public get(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * update
     */
    @Request({
        server: EmployeeSalaryController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
