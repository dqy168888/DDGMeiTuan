/**
 * Copyright (c) 2017-present, dudongge
 * All rights reserved.
 *
 * https://github.com/dudongge/DDGMeiTuan
 * copyright by dudodongge
 */


export function urlByAppendingParams(url: string, params: Object) {
    let result = url
    if (result.substr(result.length - 1) != '?') {
        result = result + `?`
    }
    
    for (let key in params) {
        let value = params[key]
        result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
    }

    result = result.substring(0, result.length - 1);
    return result;
} 