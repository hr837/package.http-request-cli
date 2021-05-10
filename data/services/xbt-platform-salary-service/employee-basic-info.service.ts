/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { EmployeeBasicInfoController } from '../../controller/xbt-platform-salary-service/employee-basic-info.controller'

export class EmployeeBasicInfoService {
    /**
     * 查询全部
     */
    @Request({
        server: EmployeeBasicInfoController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 使用ID查询
     */
    @Request({
        server: EmployeeBasicInfoController.getById
    })
    public getById(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 导入数据
     */
    @Request({
        server: EmployeeBasicInfoController.import
    })
    public import(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 分页查询
     */
    @Request({
        server: EmployeeBasicInfoController.query
    })
    public query(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 同步员工基础信息
     */
    @Request({
        server: EmployeeBasicInfoController.syncAllEmployeeBasicInfo
    })
    public syncAllEmployeeBasicInfo(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 更新
     */
    @Request({
        server: EmployeeBasicInfoController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 钉钉回调调用
     */
    @Request({
        server: EmployeeBasicInfoController.updateByDingTalkService
    })
    public updateByDingTalkService(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 更新/增加员工身份证号码
     */
    @Request({
        server: EmployeeBasicInfoController.updateIdCard
    })
    public updateIdCard(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
