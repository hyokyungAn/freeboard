// input에 첨부된 파일의 적합성을 검사하기 위한 코드

import { Modal } from "antd";

export function checkValidationImage(file: File | undefined) {
  if (!file?.size) {
    Modal.error({ content: "파일이 없습니다." });
    return false;
  }
  if (file.size > 5 * 1024 * 1024) {
    Modal.error({ content: "파일이 너무 큽니다.(제한: 5MB)" });
    return false;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "파일 확장자가 올바르지 않습니다.(png, jpeg만 가능)",
    });
    return false;
  }
  return file;
}

// 이렇게 하면 BoardWrite에서 버튼을 클릭했을 때, 해당 버튼의 index를 props로 함께 넘겨줌
