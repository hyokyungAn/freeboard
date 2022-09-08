import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import * as S from "./BrandCreate.styles";
import { v4 as uuidv4 } from "uuid";
import "react-quill/dist/quill.snow.css";
import { Modal } from "antd";
import Tag from "../../../commons/tag/tag";
import { IBrandCreateUIProps } from "./BrandCreate.types";
import MediumButton from "../../../commons/buttons/medium";
import GrayInput from "../../../commons/inputs/gray-input";
import ReactQuillContainer from "../../../commons/quill";
import DaumPostcode from "react-daum-postcode";

export default function BrandCreateUI(props: any) {
	return (
		<>
			{props.isOpen && (
				<Modal
					visible={true}
					onOk={props.onToggleModal}
					onCancel={props.onToggleModal}
				>
					<DaumPostcode
						onComplete={props.onCompleteAddressSearch}
					></DaumPostcode>
				</Modal>
			)}
			<S.Wrapper onSubmit={"return false"}>
				<S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>
				<S.BoldLine />
				<S.InputWrapper>
					<S.Label>상품명</S.Label>
					<S.InputErrorWrapper>
						<GrayInput
							type="text"
							placeholder="상품명을 작성해주세요."
							register={props.register("name")}
							defaultValue={props.data?.fetchUseditem.name}
						/>
						<S.Error>{props.formState.errors.name?.message}</S.Error>
					</S.InputErrorWrapper>
				</S.InputWrapper>
				<S.ThinLine />
				<S.InputWrapper>
					<S.Label>상품요약</S.Label>
					<S.InputErrorWrapper>
						<S.RemarksEditor
							type="text"
							placeholder="상품요약을 작성해주세요."
							// {...props.register("remarks")}
							onChange={props.onChangeRemarks}
							defaultValue={props.data?.fetchUseditem.remarks}
						/>
						<S.Error>{props.titleError}</S.Error>
					</S.InputErrorWrapper>
				</S.InputWrapper>
				<S.ThinLine />
				<S.InputWrapper>
					<S.Text>상품내용</S.Text>
					<S.InputErrorWrapper>
						<ReactQuillContainer
							getValues={props.getValues}
							onChangeContent={props.onChangeContents}
							defaultValue={props.data?.fetchUseditem.contents}
						/>
						<S.Error>{props.formState.errors.contents?.message}</S.Error>
					</S.InputErrorWrapper>
				</S.InputWrapper>
				<S.ThinLine />
				<S.InputWrapper>
					<S.Label>판매가격</S.Label>
					<S.InputErrorWrapper>
						<GrayInput
							type="number"
							placeholder="판매 가격을 입력해주세요."
							register={props.register("price")}
							defaultValue={props.data?.fetchUseditem.price}
						/>
						<S.Error>{props.formState.errors.price?.message}</S.Error>
					</S.InputErrorWrapper>
				</S.InputWrapper>
				<S.ThinLine />
				<S.InputWrapper>
					<S.Label>태그입력</S.Label>
					<S.InputErrorWrapper>
						<Tag
							tagItem={props.tagItem}
							setTagItem={props.setTagItem}
							tagList={props.tagList}
							setTagList={props.setTagList}
							data={props.data}
							register={props.register("tags")}
							defaultValue={props.data?.fetchUseditem.tags}
						/>
						<S.Error>{props.formState.errors.tags?.message}</S.Error>
					</S.InputErrorWrapper>
				</S.InputWrapper>
				<S.ThinLine />
				<S.LocationWrapper>
					<S.TransationWrapper>
						<S.Text>브랜드위치</S.Text>
						<S.Map id="map" style={{ width: 380, height: 250 }}></S.Map>
					</S.TransationWrapper>
					<S.AddressWrapper>
						<S.ZipcodeWrapper>
							<S.Zipcode
								placeholder="우편번호"
								readOnly
								{...props.register("zipcode")}
								defaultValue={
									props.data?.fetchUseditem.useditemAddress?.zipcode
								}
							/>
							<S.ZipcodeButton
								type="button"
								onClick={props.onClickAddressSearch}
							>
								우편번호 검색
							</S.ZipcodeButton>
						</S.ZipcodeWrapper>
						<GrayInput
							readOnly={true}
							register={props.register("address")}
							defaultValue={props.data?.fetchUseditem.useditemAddress?.address}
						/>
						<GrayInput
							register={props.register("addressDetail")}
							defaultValue={
								props.data?.fetchUseditem.useditemAddress?.addressDetail
							}
						/>
					</S.AddressWrapper>
				</S.LocationWrapper>
				<S.ThinLine />
				<S.ImageWrapper>
					<S.Label>사진첨부</S.Label>
					{new Array(props.fileUrls?.length + 1).fill(1).map((_, index) => (
						<Uploads01
							key={uuidv4()}
							index={index}
							fileUrl={props.fileUrls[index]}
							onChangeFileUrls={props.onChangeFileUrls}
						/>
					))}
				</S.ImageWrapper>
				<S.BoldLine />
				<S.ButtonWrapper>
					<MediumButton onClick={props.onClickCancel} title="취소" />
					<MediumButton
						isActive={props.formState.isValid}
						title={props.isEdit ? "수정" : "등록"}
						onClick={
							props.isEdit
								? props.handleSubmit(props.onClickUpdate)
								: props.handleSubmit(props.onClickSubmit)
						}
					/>
				</S.ButtonWrapper>
			</S.Wrapper>
		</>
	);
}
