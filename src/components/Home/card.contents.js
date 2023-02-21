// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        key: '1',
        title: "Wallpad",
        grids: [
            {
                key: '1-1',
                label: "로그인 페이지 Open",
                nav: "/wallpad_pageopen"
            },
            {
                key: '1-2',
                label: "계정 등록",
                nav: "/wallpad_signup"
            }
        ]
    },
    {
        key: '2',
        title: "HomeIOT",
        grids: [
            {
                key: '2-1',
                label: "로그인",
                nav: "/homeiot_login"
            },
            {
                key: '2-2',
                label: "기기 등록",
                nav: "/homeiot_register"
            },
            {
                key: '2-3',
                label: "제어",
                nav: "/homeiot_control"
            }
        ]
    },
    {
        key: '3',
        title: "3rd Party",
        grids: [
            {
                key: '3-1',
                label: "KTLogin",
                nav: "/kt_login"
            },
            {
                key: '3-2',
                label: "KTControl",
                nav: "/kt_control"
            },
            {
                key: '3-3',
                label: "KTPublic",
                nav: "/kt_public"
            }
        ]
    }
]