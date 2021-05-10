/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { RequestMethod } from '@gopowerteam/http-request'

// 控制器名称
const controller = 'management-scope'
const service = 'xbt-platform-salary-service'

export const ManagementScopeController = {
    // 创建
    create: {
        service,
        controller,
        path: '/api/managementScope/create',
        action: 'create',
        type: RequestMethod.Post
    },
    // 删除
    delete: {
        service,
        controller,
        path: '/api/managementScope/delete/{id}',
        action: 'delete',
        type: RequestMethod.Delete
    },
    // 查询全部
    getAll: {
        service,
        controller,
        path: '/api/managementScope/getAll',
        action: 'getAll',
        type: RequestMethod.Get
    },
    // 使用ID查询
    getById: {
        service,
        controller,
        path: '/api/managementScope/getById/{id}',
        action: 'getById',
        type: RequestMethod.Get
    },
    // 获取当前登录用户的管理范围信息
    getMineManagementScope: {
        service,
        controller,
        path: '/api/managementScope/getMineManagementScope',
        action: 'getMineManagementScope',
        type: RequestMethod.Get
    },
    // 分页查询
    query: {
        service,
        controller,
        path: '/api/managementScope/query',
        action: 'query',
        type: RequestMethod.Get
    },
    // 更新
    update: {
        service,
        controller,
        path: '/api/managementScope/update/{id}',
        action: 'update',
        type: RequestMethod.Put
    }
}
