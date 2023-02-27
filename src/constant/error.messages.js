// eslint-disable-next-line import/no-anonymous-default-export
export default {
    WallpadPageOpenErrCode: {
        countries: [
            {rescode: "500", errcode: "1000", tag: "cloud", messages: "국가 검색 오류입니다. 클라우드팀에게 확인요청바랍니다."},
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ],
    },
    WallpadSignupErrCode: {
        register: [
            // TODO: 1000번 코드에 대한 명확한 정의 필요..
            {rescode: "500", errcode: "1000", tag: "cloud", messages: "selectResourceModelSeqNo RDB 조회 오류"},
            {rescode: "503", errcode: "1000", tag: "cloud", messages: "RDB 조회시 오류 발생. 클라우드 서버 확인 요청."},

            {
                rescode: "400",
                errcode: "0213",
                tag: "wallpad",
                messages: "요청데이터에 countryCode값이 없습니다. 월패드에서 클라우드로 요청하는 /cmx/register/body 데이터를 확인 바랍니다."
            },
            {
                rescode: "400",
                errcode: "0121",
                tag: "wallpad",
                messages: "필수요청값인 clinet_id 또는 client_secret데이터가 없습니다.  월패드에서 클라우드로 요청하는 /cmx/register/ body 데이터를 확인 바랍니다."
            },
            {
                rescode: "401",
                errcode: "0101",
                tag: "wallpad",
                messages: "월패드에서 보내는 클라이언트ID, secret값이 잘못되었습니다. 월패드 확인요청."
            },
            {
                rescode: "400",
                errcode: "0221",
                tag: "wallpad",
                messages: "국가 조회가되지 않았습니다. 월패드에서 전송되는 countryCode를 확인요청 바랍니다."
            },
            {
                rescode: "400",
                errcode: "0211",
                tag: "wallpad",
                messages: "req.body.user 가없음. 월패드에서 /cmx/register api 요청데이터 확인 바랍니다."
            },
            {
                rescode: "400",
                errcode: "0124",
                tag: "wallpad",
                messages: "필수 데이터 user.username || user.password || mac || sn || model 없음. 월패드에서 /cmx/register api 요청데이터 확인 바랍니다. "
            },
            {
                rescode: "400",
                errcode: "0131",
                tag: "user",
                messages: "user.username 또는 user.password 형식 오류 발생. 사용자에게 ID/PW 확인 바랍니다."
            },
            {
                rescode: "400", errcode: "0201", tag: "user", messages: "같은 ID사용자가 있음. 사용자에게 ID 변경 요청바랍니다."},
            {
                rescode: "400",
                errcode: "0212",
                tag: "wallpad",
                messages: "필수 데이터 resource 없음. 월패드에서 /cmx/register api 요청데이터 확인 요청 바랍니다."
            },
            {
                rescode: "400",
                errcode: "0132",
                tag: "wallpad",
                messages: "월패드에서 /cmx/register api 요청데이터 mac or sn 확인 바랍니다."
            },
            {
                rescode: "400",
                errcode: "0203",
                tag: "cloud",
                messages: "기존 사용자에게 신규 월패드 등록 시 ID에 매칭되는 사용자 정보가 없습니다. 공통정보에서 사용자 계정상태 확인 후 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
            },
            {
                rescode: "401",
                errcode: "0231",
                tag: "cloud",
                messages: "기존 사용자에게 신규 월패드 정보 등록 시 월패드 정보가 이미 있습니다. 공통정보에서 사용자 계정상태 확인 후 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
            },
            {
                rescode: "400",
                errcode: "0202",
                tag: "cloud",
                messages: "기존 사용자에게 신규 월패드 정보 등록 시 월패드 정보가 이미 있습니다. 공통정보에서 사용자 계정상태 확인 후 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
            },
            {
                rescode: "401",
                errcode: "0204",
                tag: "wallpad",
                messages: "월패드 등록요청 시 workType === map인데 월패드 정보 resourceNo이 없습니다. 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다. 클라우드팀에게 사용자 계정 등록 상태 확인 요청해주시기 바랍니다."
            },
            {
                rescode: "400",
                errcode: "0215",
                tag: "wallpad",
                messages: "요청 파라메터 값에 필수 데이터 workType이 없습니다. 월패드에서 /cmx/register api 요청 시 workType 데이터 확인 바랍니다."
            },
            {
                rescode: "400",
                errcode: "0121",
                tag: "wallpad",
                messages: "요청 파라메터 값에 필수 데이터 clientSecret이 없습니다. 월패드에서 /cmx/register api 요청 시 clientSecret 데이터 확인 바랍니다. "
            },
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: "0204", tag: "OK", messages: "리소스 정보를 찾을 수 없음"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ],
        authorize: [
            {
                rescode: "415",
                errcode: "0162",
                tag: "wallpad",
                messages: "요청 POST http헤더 값 application/x-www-form-urlencoded encoding 확인 필요. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "405",
                errcode: "0161",
                tag: "wallpad",
                messages: "요청 api GET 또는 POST 가 아님. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "400",
                errcode: "0122",
                tag: "wallpad",
                messages: "요청 파라메터 값에 필수 데이터 'grant_type'이 없습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "400",
                errcode: "0121",
                tag: "wallpad",
                messages: "필수요청값인 'clinet_id' 또는 'client_secret'데이터가 없습니다.  월패드에서 클라우드로 요청하는 /cmx/register/ body 데이터를 확인 바랍니다. "
            },
            {rescode: "503", errcode: "0101", tag: "cloud", messages: "RDB 조회시 오류 발생. 클라우드 서버 확인 요청."},
            {
                rescode: "401",
                errcode: "0101",
                tag: "wallpad",
                messages: "월패드에서 보내는 클라이언트ID, secret 값이 잘못되었습니다. 월패드 확인요청."
            },
            {
                rescode: "412",
                errcode: "0111",
                tag: "wallpad",
                messages: "요청 api 필수 헤더가 없습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "412",
                errcode: "0113",
                tag: "wallpad",
                messages: "요청 api 필수 헤더가 없습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "412",
                errcode: "0112",
                tag: "wallpad",
                messages: "요청 api 필수 헤더가 없습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "412",
                errcode: "0114",
                tag: "wallpad",
                messages: "요청 api 필수 헤더가 없습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "401",
                errcode: "0102",
                tag: "wallpad",
                messages: "요청 파라메터 clientType 값의 형식이 잘못되었습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "400",
                errcode: "0124",
                tag: "wallpad",
                messages: "요청 api 필수 parameter가 없습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "400",
                errcode: "0132",
                tag: "wallpad",
                messages: "요청 api 필수 parameter type 오류 발생했습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "401",
                errcode: "0102",
                tag: "wallpad",
                messages: "요청 api에 Grant_type type 오류 발생했습니다. 월패드에서 POST | /oauth/authorize 요청 데이터 확인 필요."
            },
            {rescode: "500", errcode: "0311", tag: "cloud", messages: "토큰 발행시 오류 발생. 클라우드팀에게 문의 요청."},
            {rescode: "500", errcode: "1000", tag: "cloud", messages: "saveToken 쿼리 실행 중 에러발생. 클라우드팀에게 문의 요청."},
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ],
    },
    HomeIOTLoginPageErrCode: {
        authorize: [
            {
                rescode: "405",
                errcode: "0161",
                tag: "mobile",
                messages: "요청 api GET 또는 POST 가 아님. 모바일 앱에서 GET | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "400",
                errcode: "0122",
                tag: "mobile",
                messages: "요청 파라메터 값에 필수 데이터 'grant_type'이 없습니다. 모바일 앱에서 GET | /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "400",
                errcode: "0121",
                tag: "mobile",
                messages: "필수요청값인 'clinet_id' 또는 'client_secret'데이터가 없습니다.  모바일 앱에서 클라우드로 요청하는 데이터를 확인 바랍니다. "
            },
            {rescode: "503", errcode: "1000", tag: "cloud", messages: "RDB 조회시 오류 발생. 클라우드 서버 확인 요청."},
            {
                rescode: "401",
                errcode: "0101",
                tag: "mobile",
                messages: "모바일 앱에서 보내는 클라이언트ID, secret 값이 잘못되었습니다. 모바일 앱에서 확인요청."
            },
            {
                rescode: "412",
                errcode: "0111",
                tag: "mobile",
                messages: "요청 api 필수 헤더가 없습니다. 모바일 앱에서 /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "412",
                errcode: "0113",
                tag: "mobile",
                messages: "요청 api 필수 헤더가 없습니다. 모바일 앱에서 /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "412",
                errcode: "0112",
                tag: "mobile",
                messages: "요청 api 필수 헤더가 없습니다. 모바일 앱에서 /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "412",
                errcode: "0114",
                tag: "mobile",
                messages: "요청 api 필수 헤더가 없습니다. 모바일 앱에서 /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "401",
                errcode: "0102",
                tag: "mobile",
                messages: "요청 파라메터 clientType 값의 형식이 잘못되었습니다. 모바일 앱에서 /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "400",
                errcode: "0123",
                tag: "mobile",
                messages: "요청 api 필수 parameter 'username' 또는'password' 가 없습니다. 모바일 앱에서 /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "400",
                errcode: "0131",
                tag: "mobile",
                messages: "요청 api 필수 parameter 'username' or 'password' type 오류 발생했습니다. 모바일 앱에서 /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "401",
                errcode: "0102",
                tag: "mobile",
                messages: "요청 api에 Grant_type type 오류 발생했습니다. 모바일 앱에서 /oauth/authorize 요청 데이터 확인 필요."
            },
            {
                rescode: "500",
                errcode: "1000",
                tag: "cloud",
                messages: "클라우드DB에 사용자 데이터를 조회 하거나 모바일 데이터 저장중 오류 발생. 클라우드팀에게 확인 요청."
            },
            {
                rescode: "401",
                errcode: "0103",
                tag: "user",
                messages: "모바일 앱에서 보낸 사용자 정보가 클라우드 DB에 없습니다. 사용자에게 월패드의 ID/PW 확인 요청"
            },
            {rescode: "500", errcode: "0311", tag: "OK", messages: "토큰 발행시 오류 발생. 클라우드팀에게 문의 요청."},
            // {rescode: "500" , errcode: "1000" ,tag:"OK", messages: "saveToken 쿼리 실행 중 에러발생. 클라우드팀에게 문의 요청."},
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ],
        gateways: [
            {rescode: "401", errcode: "0302", tag: "mobile", messages: "토큰 상태 확인. 공통정보에서 토큰 상태 확인"},
            {rescode: "401", errcode: "0301", tag: "mobile", messages: "토큰 상태 확인. 공통정보에서 토큰 상태 확인"},
            {
                rescode: "500",
                errcode: "1000",
                tag: "cloud",
                messages: "등록된 계정 정보가 정상인지 확인 후 특이사항이 발견되지 않을 경우 클라우드팀에 문의 "
            },
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ]
    },
    HomeIOTResisterErrCode: {
        gateways: [
            {rescode: "401", errcode: "0302", tag: "mobile", messages: "토큰 상태 확인. 공통정보에서 토큰 상태 확인"},
            {rescode: "401", errcode: "0301", tag: "mobile", messages: "토큰 상태 확인. 공통정보에서 토큰 상태 확인"},
            {
                rescode: "500",
                errcode: "1000",
                tag: "cloud",
                messages: "등록된 계정 정보가 정상인지 확인 후 특이사항이 발견되지 않을 경우 클라우드팀에 문의 "
            },
            {rescode: "400", errcode: "2101", tag: "mobile", messages: "공통정보에서 계정등록 상태 확인 하고 이상없을 경우 모바일 로그 요청한다."},
            {rescode: "500", errcode: "1000", tag: "cloud", messages: "공통정보에서 계정등록 상태 확인 하고 이상없을 경우 클라우드팀에게 확인 요청한다."},
            // {rescode: "400" , errcode: "2101" ,tag:"cloud", messages: "공통정보에서 계정등록 상태 확인 하고 이상없을 경우 클라우드팀에게 확인 요청한다."},
            {
                rescode: "400",
                errcode: "2203",
                tag: "cloud",
                messages: "월패드에서 클라우드 서버로 디바이스 정보 sync되고있느지 확인이 필요함. AI 개발팀에 확인 요청"
            },
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ]
    },
    HomeIOTControlErrCode: {
        command: [
            {
                rescode: "400",
                errcode: "2202",
                tag: "mobile",
                messages: "모바일에서 보낸 제어 요청 정보에 필수정보('cgp' or 'command')가 빠졌습니다. IP home IoT 모바일로그 확인이 필요합니다."
            },
            {
                rescode: "400",
                errcode: "2101",
                tag: "mobile",
                messages: "모바일에서 보낸 제어 요청 월패드번호가 클라우드DB에 등록되지 않았다. 공통정보에서 회원 가입 상태 이상여부를 확인 한다. 특이 사항이 있을 경우 회원 등록 상태에 따른 안내를 해주고, 특이사항이 없을 경우 모바일앱 재로그인하여 재 시도 하도록 한다."
            },
            {
                rescode: "500",
                errcode: "1000",
                tag: "cloud",
                messages: "클라우드 mongoDB iot_command_history 데이터 입력 중 오류 발생 함. 클라우드팀에게 확인 요청한다."
            },
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ],
        report: [
            {
                rescode: "401",
                errcode: "0104",
                tag: "wallpad",
                messages: "월패드에서 잘못된 토큰 정보를 사용하고있습니다. 월패드 회원 가입을 다시하도록 안내 바랍니다. 이후에도 계속 이상이 있을 경우 월패드에서 토큰 발행시 발생하는 오류 확인요청 바랍니다."
            },
            {
                rescode: "400",
                errcode: "2202",
                tag: "wallpad",
                messages: "필수요청 정보('cgp' or 'command')가 빠졌습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."
            },
            // {rescode: "400" , errcode: "2203" ,tag:"wallpad", messages: "cgp.object 값이 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."},
            {
                rescode: "400",
                errcode: "2102",
                tag: "wallpad",
                messages: "cgp.object 에 rootUuid가 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."
            },
            {
                rescode: "400",
                errcode: "2203",
                tag: "wallpad",
                messages: "cgp.object 에 subUuid가 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."
            },
            {
                rescode: "500",
                errcode: "1003",
                tag: "cloud",
                messages: "mongo DB 'iot_device_lastest_values' 값 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."
            },
            {
                rescode: "400",
                errcode: "2104",
                tag: "cloud",
                messages: "mongo DB 'iot_command_history' 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."
            },
            {
                rescode: "500",
                errcode: "1000",
                tag: "cloud",
                messages: "mongo DB 'iot_command_history' 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."
            },
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ]
    },
    KTLoginErrCode: {
        loginplain: [
            {rescode: "401", errcode: "0103", tag: "user", messages: "비밀번호 또는 ID 잘못 입력했습니다. 사용자에게 확인요청."},
            {rescode: "401", errcode: "0101", tag: "cloud", messages: "조회된 사용자 정보가 없습니다. 클라우드팀에게 확인 요청."},
            {rescode: "401", errcode: "0171", tag: "etc", messages: "3rd party 지원 단지의 사용자가 아니다."},
            {rescode: "401", errcode: "0172", tag: "etc", messages: "3rd party 지원 단지의 사용자가 아니다."},
            {
                rescode: "500",
                errcode: "1000",
                tag: "cloud",
                messages: "등록된 계정 정보가 정상인지 확인 후 특이사항이 발견되지 않을 경우 클라우드팀에 문의 "
            },
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ]
    },
    KTControlErrCode: {
        status: [
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ],
        notifocation: [
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ],
        command: [
            {
                rescode: "400",
                errcode: "2202",
                tag: "mobile",
                messages: "모바일에서 보낸 제어 요청 정보에 필수정보('cgp' or 'command')가 빠졌습니다. IP home IoT 모바일로그 확인이 필요합니다."
            },
            {
                rescode: "400",
                errcode: "2101",
                tag: "mobile",
                messages: "모바일에서 보낸 제어 요청 월패드번호가 클라우드DB에 등록되지 않았다. 공통정보에서 회원 가입 상태 이상여부를 확인 한다. 특이 사항이 있을 경우 회원 등록 상태에 따른 안내를 해주고, 특이사항이 없을 경우 모바일앱 재로그인하여 재 시도 하도록 한다."
            },
            {
                rescode: "500",
                errcode: "1000",
                tag: "cloud",
                messages: "클라우드 mongoDB iot_command_history 데이터 입력 중 오류 발생 함. 클라우드팀에게 확인 요청한다."
            },
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ],
        report: [
            {
                rescode: "401",
                errcode: "0104",
                tag: "wallpad",
                messages: "월패드에서 잘못된 토큰 정보를 사용하고있습니다. 월패드 회원 가입을 다시하도록 안내 바랍니다. 이후에도 계속 이상이 있을 경우 월패드에서 토큰 발행시 발생하는 오류 확인요청 바랍니다."
            },
            {
                rescode: "400",
                errcode: "2202",
                tag: "wallpad",
                messages: "필수요청 정보('cgp' or 'command')가 빠졌습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."
            },
            // {rescode: "400" , errcode: "2203" ,tag:"wallpad", messages: "cgp.object 값이 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."},
            {
                rescode: "400",
                errcode: "2102",
                tag: "wallpad",
                messages: "cgp.object 에 rootUuid가 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."
            },
            {
                rescode: "400",
                errcode: "2203",
                tag: "wallpad",
                messages: "cgp.object 에 subUuid가 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."
            },
            {
                rescode: "500",
                errcode: "1003",
                tag: "cloud",
                messages: "mongo DB 'iot_device_lastest_values' 값 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."
            },
            {
                rescode: "400",
                errcode: "2104",
                tag: "cloud",
                messages: "mongo DB 'iot_command_history' 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."
            },
            {
                rescode: "500",
                errcode: "1000",
                tag: "cloud",
                messages: "mongo DB 'iot_command_history' 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."
            },
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ]
    },
    //     status :[
    //         {rescode: null , errcode: "9999" ,tag:"cloud", messages: "코드 확인 불가"},
    //         {rescode: "200" , errcode: null ,tag:"OK", messages: "정상 처리"},
    //         {rescode: null , errcode: null ,tag:"cloud", messages: "요청에 대한 응답이 없습니다."},
    //     ],
    //     notifocation :[
    //         {rescode: null , errcode: "9999" ,tag:"cloud", messages: "코드 확인 불가"},
    //         {rescode: "200" , errcode: null ,tag:"OK", messages: "정상 처리"},
    //         {rescode: null , errcode: null ,tag:"cloud", messages: "요청에 대한 응답이 없습니다."},
    //     ],
    //     command :[
    //         {rescode: "400" , errcode: "2202" ,tag:"mobile", messages: "모바일에서 보낸 제어 요청 정보에 필수정보('cgp' or 'command')가 빠졌습니다. IP home IoT 모바일로그 확인이 필요합니다."},
    //         {rescode: "400" , errcode: "2101" ,tag:"mobile", messages: "모바일에서 보낸 제어 요청 월패드번호가 클라우드DB에 등록되지 않았다. 공통정보에서 회원 가입 상태 이상여부를 확인 한다. 특이 사항이 있을 경우 회원 등록 상태에 따른 안내를 해주고, 특이사항이 없을 경우 모바일앱 재로그인하여 재 시도 하도록 한다."},
    //         {rescode: "500" , errcode: "1000" ,tag:"cloud", messages: "클라우드 mongoDB iot_command_history 데이터 입력 중 오류 발생 함. 클라우드팀에게 확인 요청한다."},
    //         {rescode: null , errcode: "9999" ,tag:"cloud", messages: "코드 확인 불가"},
    //         {rescode: "200" , errcode: null ,tag:"OK", messages: "정상 처리"},
    //         {rescode: null , errcode: null ,tag:"cloud", messages: "요청에 대한 응답이 없습니다."},
    //     ],
    //     report :[
    //         {rescode: "401" , errcode: "0104" ,tag:"wallpad", messages: "월패드에서 잘못된 토큰 정보를 사용하고있습니다. 월패드 회원 가입을 다시하도록 안내 바랍니다. 이후에도 계속 이상이 있을 경우 월패드에서 토큰 발행시 발생하는 오류 확인요청 바랍니다."},
    //         {rescode: "400" , errcode: "2202" ,tag:"wallpad", messages: "필수요청 정보('cgp' or 'command')가 빠졌습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."},
    //         // {rescode: "400" , errcode: "2203" ,tag:"wallpad", messages: "cgp.object 값이 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."},
    //         {rescode: "400" , errcode: "2102" ,tag:"wallpad", messages: "cgp.object 에 rootUuid가 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."},
    //         {rescode: "400" , errcode: "2203" ,tag:"wallpad", messages: "cgp.object 에 subUuid가 없습니다. 월패드에서 모바일 제어에 응답 report 확인 요청 바랍니다."},
    //         {rescode: "500" , errcode: "1003" ,tag:"cloud", messages: "mongo DB 'iot_device_lastest_values' 값 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."},
    //         {rescode: "400" , errcode: "2104" ,tag:"cloud", messages: "mongo DB 'iot_command_history' 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."},
    //         {rescode: "500" , errcode: "1000" ,tag:"cloud", messages: "mongo DB 'iot_command_history' 업데이트에 실패했습니다. 클라우드팀에 확인 요청바랍니다."},
    //         {rescode: null , errcode: "9999" ,tag:"cloud", messages: "코드 확인 불가"},
    //         {rescode: "200" , errcode: null ,tag:"OK", messages: "정상 처리"},
    //         {rescode: null , errcode: null ,tag:"cloud", messages: "요청에 대한 응답이 없습니다."},
    //     ]
    // },
    OPENAPIServerErrCode: {
        openapi: [
            {rescode: "", errcode: "204", tag: "cloud", messages: `클라우드 팀에게 확인요청이 필요합니다.`},
            {
                rescode: "",
                errcode: "416",
                tag: "mobile",
                messages: `StatusKey의 길이가 범위를 벗어납니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {rescode: "", errcode: "400", tag: "mobile", messages: `"400 Bad Request" 3rd Party 앱 전송내용 확인이 필요합니다.`},
            {rescode: "", errcode: "401", tag: "mobile", messages: `"401 Unauthorized" 3rd Party 앱 전송내용 확인이 필요합니다.`},
            {rescode: "", errcode: "404", tag: "mobile", messages: `404 error 3rd Party 앱 전송내용 확인이 필요합니다.`},
            {rescode: "", errcode: "405", tag: "mobile", messages: `405 error 3rd Party 앱 전송내용 확인이 필요합니다.`},
            {rescode: "", errcode: "503", tag: "cloud", messages: `클라우드 팀에게 확인요청이 필요합니다.`},
            {rescode: "", errcode: "800", tag: "mobile", messages: `코맥스 악세서리가 등록되지 않았습니다. KT앱에서 코맥스 악세서리 재등록 안내바랍니다.`},
            {rescode: "", errcode: "801", tag: "mobile", messages: `코맥스 악세서리가 등록되지 않았습니다. KT앱에서 코맥스 악세서리 재등록 안내바랍니다.`},
            {
                rescode: "",
                errcode: "802",
                tag: "cloud",
                messages: `월패드 디바이스리스트가 클라우드DB에 저장되지 않거나 잘못된 데이터가 저장되었습니다. 클라우드팀에 확인요청 필요합니다.`
            },
            {
                rescode: "",
                errcode: "803",
                tag: "mobile",
                messages: `코맥스 악세서리가 등록되지 않았습니다. 3rd Party 앱에서 코맥스 악세서리 재등록 안내바랍니다.`
            },
            {
                rescode: "",
                errcode: "804",
                tag: "mobile",
                messages: `클라이언트에서 전송된 데이터에 'status' 없습니다. 클라이언트 앱 전송내용 확인이 필요합니다.`
            },
            {rescode: "", errcode: "805", tag: "cloud", messages: `월패드 디바이스 정보에서 필수 데이터가 없음. 클라우드팀에게 확인 요청 필요합니다.`},
            {
                rescode: "",
                errcode: "806",
                tag: "mobile",
                messages: `homeID가 없습니다. 3rd Party 악세서리정보가 등록 되었는지 확인 하시고 사용중인 악세서리가 없을 경우 사용자에게 코맥스 악세서리 재등록 요청, 그외 경우는 KT 로그와 함께 클라우드팀에게 확인 요청 바랍니다.`
            },
            {
                rescode: "",
                errcode: "807",
                tag: "cloud",
                messages: `클라우드 iot DB에 등록된 월패드의 command 정보를 읽어오는 중 오류발생했습니다. 클라우드팀에게 확인 요청 필요합니다.`
            },
            {
                rescode: "",
                errcode: "808",
                tag: "mobile",
                messages: `해당 userNo에 등록된  home 정보가 없습니다. 3rd Party 앱 악세서리가 정상등록되었는지 확인 바랍니다. 악세서리 등록이 안되었을 경우 코맥스 악세서리 재등록 안내 바랍니다. 그외 경우 3rd Party 앱에서 보낸 homeID 정보를 확인 하기 위해 로그요청이 필요합니다. 3rd Party 로그와 함께 클라우드 팀에게 확인요청이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "809",
                tag: "mobile",
                messages: `3rd Party 앱 특정 홈의 정보/상태를 설정(/homes/{homeId}) 요청시 3rd Party 앱 에서 받은 homeID 정보가 코맥스 클라우드 DB에서 확인되지 않습니다. 악세서리 등록이 안되었을 경우 코맥스 악세서리 재등록 안내 바랍니다. 그외 경우 3rd Party 앱에서 보낸 homeID 정보를 확인 하기 위해 로그요청이 필요합니다. 3rd Party 로그와 함께 클라우드 팀에게 확인요청이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "810",
                tag: "mobile",
                messages: `3rd Party 앱 에서 받은 homeName 정보가 코맥스 클라우드 DB에서 확인되지 않습니다. 악세서리 등록이 안되었을 경우 코맥스 악세서리 재등록 안내 바랍니다. 그외 경우 3rd Party 앱에서 보낸 homeID 정보를 확인 하기 위해 로그요청이 필요합니다. 3rd Party 로그와 함께 클라우드 팀에게 확인요청이 필요합니다.`
            },
            {rescode: "", errcode: "811", tag: "cloud", messages: `클라우드 팀에게 확인요청이 필요합니다.`},
            {rescode: "", errcode: "812", tag: "3rd", messages: `home'관련 필수정보를 받지 못했습니다. 3rd Party 업체에게 확인 요청바랍니다.`},
            {rescode: "", errcode: "813", tag: "cloud", messages: `클라우드 팀에게 확인요청이 필요합니다.`},
            {
                rescode: "",
                errcode: "814",
                tag: "3rd",
                messages: `sceneId' 필수정보가 없거나 잘못된 값입니다.3rd Party 업체에게 확인 요청바랍니다.`
            },
            {rescode: "", errcode: "815", tag: "3rd", messages: `clientId' 필수정보를 받지 못했습니다. 3rd Party 업체에게 확인 요청바랍니다.`},
            {rescode: "", errcode: "816", tag: "cloud", messages: `클라우드 팀에게 확인요청이 필요합니다.`},
            {rescode: "", errcode: "817", tag: "3rd", messages: `roomId' 필수정보를 받지 못했습니다. 3rd Party 업체에게 확인 요청바랍니다.`},
            {
                rescode: "",
                errcode: "818",
                tag: "mobile",
                messages: `3rd Party 앱 에서 받은 roomId 정보가 코맥스 클라우드 DB에서 확인되지 않습니다. 악세서리 등록이 안되었을 경우 코맥스 악세서리 재등록 안내 바랍니다. 그외 경우 3rd Party 앱에서 보낸 homeID 정보를 확인 하기 위해 로그요청이 필요합니다. 3rd Party 로그와 함께 클라우드 팀에게 확인요청이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "819",
                tag: "mobile",
                messages: `scene에 등록된 homeID 가 악세서리 리스트와 sync되지 않았습니다. 3rd Party 악세서리정보가 등록 되었는지 확인 하시고 사용중인 악세서리가 없을 경우 사용자에게 코맥스 악세서리 재등록 요청, 그외 경우는 KT 로그와 함께 클라우드팀에게 확인 요청 바랍니다. `
            },
            {
                rescode: "",
                errcode: "820",
                tag: "3rd",
                messages: `sceneId' 필수정보가 없거나 잘못된 값입니다.3rd Party 업체에게 확인 요청바랍니다.`
            },
            {
                rescode: "",
                errcode: "821",
                tag: "mobile",
                messages: `등록된 scene정보가 없거나 사용 안함 상태입니다. 3rd Party앱에서 scene 상태 확인및 코맥스 서비스 부분 로그 확보 요청 후 클라우드팀에게 전달 바랍니다.`
            },
            {
                rescode: "",
                errcode: "822",
                tag: "mobile",
                messages: `3rd Party 앱으로 등록된 악세서리 리스트가 클라우드DB에 없습니다. 월패드 회원가입 상태인지 확인 후 3rd Party앱에서 코맥스 악세서리 재등록 요청 바랍니다. `
            },
            {
                rescode: "",
                errcode: "823",
                tag: "mobile",
                messages: `3rd Party 앱으로 등록된 악세서리 리스트가 클라우드DB에 없거나 특정 악세서리ID가 없습니다. . 월패드 회원가입 상태인지 확인 후 3rd Party앱에서 코맥스 악세서리 재등록 요청 바랍니다. `
            },
            {
                rescode: "",
                errcode: "824",
                tag: "mobile",
                messages: `scene 관련 서비스 중 3rd Party 앱으로 등록된 악세서리 리스트가 클라우드DB에 없거나 특정 악세서리ID가 없습니다. . 월패드 회원가입 상태인지 확인 후 3rd Party앱에서 코맥스 악세서리 재등록 요청 바랍니다. `
            },
            {rescode: "", errcode: "825", tag: "cloud", messages: `클라우드 팀에게 확인요청이 필요합니다.`},
            {
                rescode: "",
                errcode: "826",
                tag: "cloud",
                messages: `특정 Zone에 Room 등록 서비스 중 에러 발생. 이미 roomID 존재.  3rd Party 로그와 함께 클라우드 팀에게 확인요청이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "827",
                tag: "mobile",
                messages: `앱에서 전달 받은 zoneId 값이 없거나 잘못된 값입니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "828",
                tag: "cloud",
                messages: `클라우드DB에서 zoneId 조회되지 않습니다. 3rd Party 로그와 함께 클라우드 팀에게 확인요청이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "829",
                tag: "mobile",
                messages: `앱에서 전달 받은 homeID 값이 없거나 잘못된 값입니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "830",
                tag: "mobile",
                messages: `앱에서 전달 받은 information 값이 없거나 잘못된 값입니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "831",
                tag: "mobile",
                messages: `앱에서 전달 받은 information 값이 없거나 잘못된 값입니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "832",
                tag: "mobile",
                messages: `앱에서 전달 받은 'status' 잘못된 값이거나 없습니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "833",
                tag: "mobile",
                messages: `앱에서 전달 받은 'dvc-os' 잘못된 값이거나 없습니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "834",
                tag: "mobile",
                messages: `앱에서 전달 받은 'username' 또는 'password' 잘못된 값이거나 없습니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "835",
                tag: "mobile",
                messages: `앱에서 전달 받은 refreshToken이 값이 없습니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "836",
                tag: "mobile",
                messages: `앱에서 전달 받은 grantType이 잘못된 값입니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "837",
                tag: "mobile",
                messages: `앱에서 전달 받은 categoryName 의 길이가 50을 넘습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "838",
                tag: "mobile",
                messages: `앱에서 전달 받은 status 또는 value가 잘못된 값입니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "839",
                tag: "mobile",
                messages: `앱에서 전달 받은 'homeName'의 길이가 50을 넘습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {rescode: "", errcode: "840", tag: "cloud", messages: `클라우드 팀에게 확인요청이 필요합니다.`},
            {
                rescode: "",
                errcode: "841",
                tag: "mobile",
                messages: `홈에 악세서리 등록 시 category 또는 serialNumber가 없습니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "842",
                tag: "mobile",
                messages: `앱에서 전달 받은 'Name'의 길이가 50을 넘습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "843",
                tag: "mobile",
                messages: `앱에서 전달 받은 'manufacturer'의 길이가 50을 넘습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "844",
                tag: "mobile",
                messages: `앱에서 전달 받은 'category'의 길이가 50을 넘습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "845",
                tag: "mobile",
                messages: `이미등록된 accessoryId 오류입니다. 3rd Party 로그와 함께 클라우드 팀에게 확인요청이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "846",
                tag: "mobile",
                messages: `씬 실행요청 시 sceneID 가 없습니다. 3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "847",
                tag: "mobile",
                messages: `앱에서 전달 받은 'clientId'잘못된 값이거나 없습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "848",
                tag: "mobile",
                messages: `앱에서 전달 받은 'category'잘못된 값이거나 없습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "849",
                tag: "mobile",
                messages: `앱에서 전달 받은 'direct'잘못된 값이거나 없습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "850",
                tag: "mobile",
                messages: `앱에서 전달 받은 'direct'잘못된 값이거나 없습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "851",
                tag: "cloud",
                messages: `클라우드DB에서 member조회되지 않습니다. 3rd Party 로그와 함께 클라우드 팀에게 확인요청이 필요합니다.`
            },
            {rescode: "", errcode: "852", tag: "mobile", messages: `유통형 단지 서비스입니다. 3rd Party 앱 전송내용 확인이 필요합니다.`},
            {rescode: "", errcode: "853", tag: "cloud", messages: `클라우드DB에서 엘레베이터 function이 조회되지 않습니다. 확인요청이 필요합니다.`},
            {
                rescode: "",
                errcode: "854",
                tag: "mobile",
                messages: `앱에서 전달 받은 'uuid'잘못된 값이거나 없습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "855",
                tag: "mobile",
                messages: `앱에서 전달 받은 'OsType'잘못된 값이거나 없습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {
                rescode: "",
                errcode: "856",
                tag: "mobile",
                messages: `앱에서 전달 받은 'memberNo'잘못된 값이거나 없습니다.  3rd Party 앱 전송내용 확인이 필요합니다.`
            },
            {rescode: "", errcode: "857", tag: "cloud", messages: `callLobby 함수 실행중 오류 발생함. 클라우드 팀에게 확인요청이 필요합니다.`},
            {rescode: "", errcode: "900", tag: "cloud", messages: `"Internal Server Error" 클라우드 팀에게 확인요청이 필요합니다.`},
            {rescode: "", errcode: "999", tag: "cloud", messages: `클라우드 팀에게 확인요청이 필요합니다.`},
            {rescode: null, errcode: "9999", tag: "cloud", messages: "코드 확인 불가"},
            {rescode: "200", errcode: null, tag: "OK", messages: "정상 처리"},
            {rescode: null, errcode: null, tag: "cloud", messages: "요청에 대한 응답이 없습니다."},
        ]
    }
}