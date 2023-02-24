import {message} from "antd";

const handleResponseError = (error) => {
    if (error.response.status === 400) {
        message.warning(`잘못된 요청입니다.\n\n${error.response.data.message}`, 5).then();
    } else if (error.response.status === 500) {
        message.error(`알 수 없는 에러가 발생하였습니다. 담당자에 문의하세요.\n\n${error.response.data.message}`, 5).then();
    }
}

export {handleResponseError};