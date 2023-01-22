import request from '@/utils/request'

export function getAction(url, params) {
    return request({
        url: url,
        method: 'get',
        params: params
    })
}


export function postAction(url, params) {
    return request({
        url: url,
        method: 'post',
        data: params
    })
}


export function putAction(url, params) {
    return request({
        url: url,
        method: 'put',
        data: params
    })
}

export function deleteAction(url, params) {
    return request({
        url: url,
        method: 'delete',
        params: params
    })
}


export function httpAction(url, parameter, method) {
    return request({
        url: url,
        method: method,
        data: parameter
    })
}

/**
 * 下载文件，用于excel导出
 * @param url 
 * @param  parameter 
 */
export function downFile(url, parameter) {
    return request({
        url: url,
        params: parameter,
        method: 'get',
        responseType: 'blob'
    })
}

/**
 * 
 */
export function downloadFile(url, fileName, parameter) {
    downFile(url, parameter).then((data) => {
        if (!data || data.size === 0) {
            Vue.prototype['$message'].warning('文件下载失败')
            return
        }
        if (typeof window.navigator.msSaveBlob !== 'undefined') {
            window.navigator.msSaveBlob(new Blob([data]), fileName)
        } else {
            let url = window.URL.createObjectURL(new Blob([data]))
            let link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', fileName)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link) //下载完成移除元素
            window.URL.revokeObjectURL(url) //释放掉blob对象
        }
    })
}
