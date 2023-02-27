import codeDefine from "../constant/log.define";

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

export const logParser = (logs, part) => {
    const result = [];
    logs.forEach(log => {
        if (log.responseCode >= 500) {
            log.tag = 'cloud';
            log.message = '서버 내부 오류입니다. 클라우드 팀에 문의 바랍니다.';
        } else if (log.errorCode !== null) {
            const def = codeDefine(log.errorCode, part);
            if (def !== undefined) {
                log.tag = def.tag;
                log.message = def.message;
            } else {
                log.tag = 'cloud';
                log.message = "정의되지 않은 오류입니다. 클라우드 팀에 문의 바랍니다.";
            }
        }
        result.push(log);
    });

    return result;
}