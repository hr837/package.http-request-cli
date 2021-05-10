/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { AgentAppointmentOrderController } from '../../controller/xbt-platform-kyb-service/agent-appointment-order.controller'

export class AgentAppointmentOrderService {
    /**
     * 代理预约提交
     */
    @Request({
        server: AgentAppointmentOrderController.agentAppointmentOrderPost
    })
    public agentAppointmentOrderPost(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 创建
     */
    @Request({
        server: AgentAppointmentOrderController.create
    })
    public create(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 删除
     */
    @Request({
        server: AgentAppointmentOrderController.delete
    })
    public delete(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 查询全部
     */
    @Request({
        server: AgentAppointmentOrderController.getAll
    })
    public getAll(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 使用ID查询
     */
    @Request({
        server: AgentAppointmentOrderController.getById
    })
    public getById(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 分页查询
     */
    @Request({
        server: AgentAppointmentOrderController.query
    })
    public query(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 查询员工的预约记录
     */
    @Request({
        server: AgentAppointmentOrderController.queryByEmployee
    })
    public queryByEmployee(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 查询客户的预约记录
     */
    @Request({
        server: AgentAppointmentOrderController.queryByUser
    })
    public queryByUser(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 更新
     */
    @Request({
        server: AgentAppointmentOrderController.update
    })
    public update(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
