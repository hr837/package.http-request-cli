/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'salary-confirm-flow'
const service = 'xbt-platform-salary-service'

export const SalaryConfirmFlowController = {
    // 审核同意
    confirm: {
        service,
        controller,
        path: '/api/salary_confirm_flow/confirm',
        action: 'confirm',
        type: RequestMethod.Post
    },
    // 创建审批
    create: {
        service,
        controller,
        path: '/api/salary_confirm_flow/create',
        action: 'create',
        type: RequestMethod.Post
    },
    // 审核不同意
    deny: {
        service,
        controller,
        path: '/api/salary_confirm_flow/deny',
        action: 'deny',
        type: RequestMethod.Post
    },
    // 审批列表
    getAllConfirm: {
        service,
        controller,
        path: '/api/salary_confirm_flow/getAllAudit',
        action: 'getAllConfirm',
        type: RequestMethod.Get
    },
    // 我的流程
    getList: {
        service,
        controller,
        path: '/api/salary_confirm_flow/getMyFlow',
        action: 'getList',
        type: RequestMethod.Get
    }
}
