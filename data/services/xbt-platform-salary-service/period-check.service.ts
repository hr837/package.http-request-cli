/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { PeriodCheckController } from '../../controller/xbt-platform-salary-service/period-check.controller'

export class PeriodCheckService {
    /**
     * get All
     */
    @Request({
        server: PeriodCheckController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne by employee
     */
    @Request({
        server: PeriodCheckController.getByEmployee
    })
    public getByEmployee(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne
     */
    @Request({
        server: PeriodCheckController.get
    })
    public get(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * getList of detail
     */
    @Request({
        server: PeriodCheckController.getDetailListByEmployee
    })
    public getDetailListByEmployee(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
