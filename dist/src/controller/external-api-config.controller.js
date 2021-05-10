"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalApiConfigController = void 0;
/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
const http_request_1 = require("@gopowerteam/http-request");
// 控制器名称
const controller = 'external-api-config';
const service = '';
exports.ExternalApiConfigController = {
    // 创建
    create: {
        service,
        controller,
        path: '/api/externalApiConfig/create',
        action: 'create',
        type: http_request_1.RequestMethod.Post
    },
    // 删除
    delete: {
        service,
        controller,
        path: '/api/externalApiConfig/delete/{id}',
        action: 'delete',
        type: http_request_1.RequestMethod.Delete
    },
    // 查询全部
    getAll: {
        service,
        controller,
        path: '/api/externalApiConfig/getAll',
        action: 'getAll',
        type: http_request_1.RequestMethod.Get
    },
    // 使用ID查询
    getById: {
        service,
        controller,
        path: '/api/externalApiConfig/getById/{id}',
        action: 'getById',
        type: http_request_1.RequestMethod.Get
    },
    // 分页查询
    query: {
        service,
        controller,
        path: '/api/externalApiConfig/query',
        action: 'query',
        type: http_request_1.RequestMethod.Get
    },
    // 更新
    update: {
        service,
        controller,
        path: '/api/externalApiConfig/update/{id}',
        action: 'update',
        type: http_request_1.RequestMethod.Put
    }
};
