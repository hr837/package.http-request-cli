/**
 * This file is generated by the RequestConfigGenerator.
 * Do not edit.
 */
import { Request, RequestParams } from '@gopowerteam/http-request'
import { Observable } from 'rxjs'
import { COSController } from '../../controller/xbt-platform-salary-service/c-o-s.controller'

export class COSService {
    /**
     * 创建临时Secret
     */
    @Request({
        server: COSController.createTempSecret
    })
    public createTempSecret(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 创建临时上传链接
     */
    @Request({
        server: COSController.createUploadUrl
    })
    public createUploadUrl(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * fileUpload
     */
    @Request({
        server: COSController.fileUpload
    })
    public fileUpload(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
    /**
     * 获取授权URL
     */
    @Request({
        server: COSController.generatePresignedUrl
    })
    public generatePresignedUrl(requestParams: RequestParams): Observable<any> {
        return requestParams.request()
    }
}
