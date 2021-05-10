/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { EmployeeAttendanceController } from '../../controller/xbt-platform-salary-service/employee-attendance.controller'

export class EmployeeAttendanceService {
    /**
     * get All
     */
    @Request({
        server: EmployeeAttendanceController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne
     */
    @Request({
        server: EmployeeAttendanceController.getByEmployee
    })
    public getByEmployee(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne
     */
    @Request({
        server: EmployeeAttendanceController.get
    })
    public get(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * import excel
     */
    @Request({
        server: EmployeeAttendanceController.import
    })
    public import(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * update
     */
    @Request({
        server: EmployeeAttendanceController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
