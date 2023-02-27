const codeDefine = (code) => {

    const definition = {
        "0101": {
            tag: "wallpad",
            message: "Client 인증 오류 (잘못된 client_id, client_secret) 입니다."
        },
        "0121": {
            tag: "wallpad",
            message: "client_id, client_secret 은 필수 입력 항목입니다. 요청 BODY 확인 바랍니다."
        },
        "0124": {
            tag: "wallpad",
            message: "필수 입력 데이터 (username, password, mac, sn, model) 가 없습니다. 요청 BODY 확인 바랍니다."
        },
        "0131": {
            tag: "user",
            message: "username 혹은 password 형식 오류입니다. 사용자에게 ID/PW 확인 바랍니다."
        },
        "0132": {
            tag: "wallpad",
            message: "요청 데이터 mac 혹은 sn 의 확인이 필요합니다."
        },
        "0201": {
            tag: "user",
            message: "ID 가 이미 존재합니다. 사용자에게 ID 변경 요청 바랍니다."
        },
        "0202": {
            tag: "cloud",
            message: "기존 사용자에게 신규 월패드 정보 등록 시 월패드 정보가 이미 있습니다. 공통정보에서 사용자 계정상태 확인 후 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
        },
        "0203": {
            tag: "cloud",
            message: "기존 사용자에게 신규 월패드 등록 시 ID에 매칭되는 사용자 정보가 없습니다. 공통정보에서 사용자 계정상태 확인 후 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
        },
        "0204": {
            tag: "wallpad",
            message: "리소스 정보를 찾을 수 없습니다."
        },
        "0211": {
            tag: "wallpad",
            message: "req.body.user 는 필수 입력 항목입니다. 요청 BODY 확인 바랍니다."
        },
        "0212": {
            tag: "wallpad",
            message: "resource 는 필수 입력 항목입니다. 요청 BODY 확인 바랍니다."
        },
        "0213": {
            tag: "wallpad",
            message: "countryCode 은 필수 입력 항목입니다. 요청 BODY 확인 바랍니다."
        },
        "0215": {
            tag: "wallpad",
            message: "요청 파라메터 값에 필수 데이터 workType이 없습니다. 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
        },
        "0221": {
            tag: "wallpad",
            message: "국가코드가 존재하지 않습니다."
        },
        "0231": {
            tag: "cloud",
            message: "기존 사용자에게 신규 월패드 정보 등록 시 월패드 정보가 이미 있습니다. 공통정보에서 사용자 계정상태 확인 후 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
        },
        "1000": {
            tag: "cloud",
            message: "국가 검색 중 오류가 발생하였습니다."
        },
        "9999": {
            tag: "cloud",
            message: "정의되지 않은 오류입니다. 클라우드팀에 문의 바랍니다."
        }
    }

    return definition[code];
}


export default codeDefine;