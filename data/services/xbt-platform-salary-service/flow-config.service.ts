/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { FlowConfigController } from '../../controller/xbt-platform-salary-service/flow-config.controller'

export class FlowConfigService {
    /**
     * create
     */
    @Request({
        server: FlowConfigController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * delete
     */
    @Request({
        server: FlowConfigController.delete
    })
    public delete(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * get All
     */
    @Request({
        server: FlowConfigController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * findOne
     */
    @Request({
        server: FlowConfigController.get
    })
    public get(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * get List
     */
    @Request({
        server: FlowConfigController.getList
    })
    public getList(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * update
     */
    @Request({
        server: FlowConfigController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
