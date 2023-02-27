const codeDefine = (code, part) => {

    const definition = {
        "0101": {
            tag: part,
            message: "Client 인증 오류 (잘못된 client_id, client_secret) 입니다."
        },
        "0102": {
            tag: part,
            message: "요청 파라메터 clientType 값의 형식이 잘못되었습니다. 요청 BODY 확인 바랍니다."
        },
        "0103": {
            tag: "user",
            message: "모바일 앱에서 보낸 사용자 정보가 클라우드 DB에 없습니다. 사용자에게 월패드의 ID/PW 확인 요청"
        },
        "0104": {
            tag: "wallpad",
            message: "월패드에서 잘못된 토큰 정보를 사용하고있습니다. 월패드 회원 가입을 다시하도록 안내 바랍니다. 이 후에도 계속 이상이 있을 경우 월패드에서 토큰 발행 시 발생하는 오류 확인요청 바랍니다."
        },
        "0111": {
            tag: part,
            message: "요청 api 필수 헤더가 없습니다. 요청 BODY 확인 바랍니다."
        },
        "0112": {
            tag: part,
            message: "요청 api 필수 헤더가 없습니다. 요청 BODY 확인 바랍니다."
        },
        "0113": {
            tag: part,
            message: "요청 api 필수 헤더가 없습니다. 요청 BODY 확인 바랍니다."
        },
        "0114": {
            tag: part,
            message: "요청 api 필수 헤더가 없습니다. 요청 BODY 확인 바랍니다."
        },
        "0121": {
            tag: part,
            message: "client_id, client_secret 은 필수 입력 항목입니다. 요청 BODY 확인 바랍니다."
        },
        "0122": {
            tag: part,
            message: "요청 파라메터 값에 필수 데이터 'grant_type'이 없습니다. 요청 BODY 확인 바랍니다."
        },
        "0123": {
            tag: "mobile",
            message: "필수 입력 parameter 인 username 혹은 password 가 입력되지 않았습니다. 요청 데이터 확인 바랍니다."
        },
        "0124": {
            tag: "wallpad",
            message: "필수 입력 데이터 (username, password, mac, sn, model) 가 없습니다. 요청 BODY 확인 바랍니다."
        },
        "0131": {
            tag: part,
            message: "username 혹은 password 형식 오류입니다. 사용자에게 ID/PW 확인 바랍니다."
        },
        "0132": {
            tag: "wallpad",
            message: "요청 데이터 mac 혹은 sn 의 확인이 필요합니다."
        },
        "0161": {
            tag: part,
            message: "요청 api GET 또는 POST 가 아님. 요청 BODY 확인 바랍니다."
        },
        "0162": {
            tag: "wallpad",
            message: "요청 POST http헤더 값 application/x-www-form-urlencoded encoding 확인 필요. 요청 BODY 확인 바랍니다."
        },
        "0171": {
            tag: "etc",
            message: "3rd party 를 지원하는 단지의 사용자가 아닙니다."
        },
        "0172": {
            tag: "etc",
            message: "3rd party 를 지원하는 단지의 사용자가 아닙니다."
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
            message: "요청 파라메터 값에 필수 데이터 workType이 없습니다. 요청 BODY 확인 바랍니다."
        },
        "0221": {
            tag: "wallpad",
            message: "국가코드가 존재하지 않습니다."
        },
        "0231": {
            tag: "cloud",
            message: "기존 사용자에게 신규 월패드 정보 등록 시 월패드 정보가 이미 있습니다. 공통정보에서 사용자 계정상태 확인 후 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
        },
        "0301": {
            tag: "mobile",
            message: "토큰의 상태 확인이 필요합니다. 공통 정보에서 토큰 상태를 확인해주세요."
        },
        "0302": {
            tag: "mobile",
            message: "토큰의 상태 확인이 필요합니다. 공통 정보에서 토큰 상태를 확인해주세요."
        },
        "1000": {
            tag: "cloud",
            message: "데이터베이스 조회 혹은 등록 과정에서 오류가 발생하였습니다. 클라우드팀에 문의 바랍니다."
        },
        "1003": {
            "tag": "cloud",
            message: "(mongoDB) iot_device_latest_values 값 업데이트에 실패하였습니다. 클라우드팀에 문의 바랍니다."
        },
        "2101": {
            tag: "mobile",
            message: "모바일에서 보낸 제어 요청 월패드 번호가 클라우드에 등록되지 않았습니다. 공통정보에서 회원 가입 상태 확인 바랍니다."
        },
        "2102": {
            tag: "wallpad",
            message: "cgp.object 에 rootUuid 가 누락되었습니다. 월패드에서 모바일 제어에 응답 report 확인 바랍니다."
        },
        "2103": {
            tag: "wallpad",
            message: "cgp.object 에 subUuid 가 누락되었습니다. 월패드에서 모바일 제어에 응답 report 확인 바랍니다."
        },
        "2104": {
            tag: "cloud",
            message: "(mongoDB) iot_command_history 업데이트에 실패하였습니다. 클라우드팀에 문의 바랍니다."
        },
        "2202": {
            tag: part,
            message: "모바일에서 보낸 제어 요청 정보에 필수정보('cgp' or 'command')가 빠졌습니다. IP home IoT 모바일로그 확인이 필요합니다."
        },
        "2203": {
            tag: "cloud",
            message: "월패드에서 클라우드 서버로 디바이스 정보 sync 되고 있는지 확인이 필요합니다. AI 개발팀에 확인 요청 바랍니다."
        },
        "9999": {
            tag: "cloud",
            message: "정의되지 않은 오류입니다. 클라우드팀에 문의 바랍니다."
        }
    }

    return definition[code];
}


export default codeDefine;