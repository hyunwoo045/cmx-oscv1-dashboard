export const cookieToObj = (str) => {
    str = str.split('; ');
    let result = {};
    for (let i = 0; i < str.length; i++) {
        let cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

export const matchErrMsg = (data, err, log) => {
    data.logs.forEach(element => {
        let resultRc = element.responseCode;
        let resultEc = element.errorCode;
        try {
            let result = err.filter(v => v.rescode === resultRc && v.errcode === resultEc)
            element.tag = result[0].tag;
            element.msg = result[0].messages;
        } catch (err) {
            element.tag = 'cloud';
            element.msg = `정의되지 않은 에러 유형. 클라우드 팀에 확인 요청. (${resultRc} , ${resultEc})`
        }

        log = log.concat(element);
    })

    return log;
}