import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./BrandCreate.queries";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import BrandCreateUI from "./BrandCreate.presenter";
import { IBrandCreateProps, IForm } from "./BrandCreate.types";

declare const window: typeof globalThis & {
	kakao: any;
};

const schema = yup.object({
	name: yup.string().required("상품명은 필수 입력사항입니다."),
	remarks: yup.string().required("상품요약은 필수 입력사항입니다."),
	contents: yup.string().required("내용은 필수 입력사항입니다."),
	price: yup
		.number()
		.typeError("숫자로 입력해주세요.")
		.required("판매 가격은 필수 입력사항입니다"),
	tags: yup.string(),
	zipcode: yup.string(),
	address: yup.string(),
	addressDetail: yup.string(),
	lat: yup.number(),
	lng: yup.number(),
});

export default function BrandCreate(props: IBrandCreateProps) {
	const router = useRouter();
	const [createUseditem] = useMutation(CREATE_USED_ITEM);
	const [updateUseditem] = useMutation(UPDATE_USED_ITEM);
	const [isOpen, setIsOpen] = useState(false);
	const [fileUrls, setFileUrls] = useState<string[]>([]);
	const [tagItem, setTagItem] = useState("");
	const [tagList, setTagList] = useState([]);

	const { register, handleSubmit, formState, setValue, trigger, getValues } =
		useForm<IForm>({
			resolver: yupResolver(schema),
			mode: "onChange",
		});

	const onChangeContents = (contents: string) => {
		setValue("contents", contents);
		trigger("contents");
	};

	const onToggleModal = () => {
		setIsOpen(false);
	};

	const onChangeRemarks = (value: string) => {
		// register로 등록하지 않고, 강제로 값을 넣어주는 기능!!
		setValue("remarks", value === "<p><br></p>" ? "" : value);

		// onChange 됐다고 react-hook-form에 알려주는 기능!!
		trigger("remarks");
	};

	const onChangeLatLng = (lat: number, lng: number) => {
		setValue("lat", lat);
		setValue("lng", lng);

		trigger("lat");
		trigger("lng");
	};

	useEffect(() => {
		const script = document.createElement("script"); // script태그를 만들거야
		script.src =
			"//dapi.kakao.com/v2/maps/sdk.js?appkey=6ab7e8fda05e691adfa7a10eb8beb737&autoload=false&libraries=services"; // src에 이 주소를 넣을거야
		document.head.appendChild(script); // head

		script.onload = () => {
			window.kakao.maps.load(function () {
				const mapContainer = document.getElementById("map"), // 지도를 표시할 div
					mapOption = {
						center: new window.kakao.maps.LatLng(
							getValues("lat") || 33.450701,
							getValues("lng") || 126.570667
						), // 지도의 중심좌표
						level: 3, // 지도의 확대 레벨
					};

				// 지도를 생성합니다
				const map = new window.kakao.maps.Map(mapContainer, mapOption);

				// 주소-좌표 변환 객체를 생성합니다
				const geocoder = new window.kakao.maps.services.Geocoder();

				// 주소로 좌표를 검색합니다
				geocoder.addressSearch(
					getValues("address"),
					function (result: any, status: string) {
						// 정상적으로 검색이 완료됐으면
						if (status === window.kakao.maps.services.Status.OK) {
							const coords = new window.kakao.maps.LatLng(
								result[0].y,
								result[0].x
							);

							// setLat(Number(result[0].y));
							// setLng(Number(result[0].x));

							onChangeLatLng(Number(result[0].y), Number(result[0].x));

							// 결과값으로 받은 위치를 마커로 표시합니다
							const marker = new window.kakao.maps.Marker({
								map: map,
								position: coords,
							});

							// 인포윈도우로 장소에 대한 설명을 표시합니다
							// const infowindow = new window.kakao.maps.InfoWindow({
							// 	content:
							// 		'<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
							// });
							// infowindow.open(map, marker);

							// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
							map.setCenter(coords);
						}
					}
				);
			});
		};
	}, [props.data, isOpen]);

	const onClickAddressSearch = () => {
		setIsOpen(true);
	};

	const onCompleteAddressSearch = (data: any) => {
		setValue("address", data.address);
		setValue("zipcode", data.zonecode);

		trigger("address");
		trigger("zipcode");

		setIsOpen(false);
	};

	const onChangeFileUrls = (fileUrl: string, index: number) => {
		const newFileUrls = [...fileUrls];
		newFileUrls[index] = fileUrl;
		setFileUrls(newFileUrls);
	};

	const onClickCancel = () => {
		router.push(`/brand/${router.query.useditemId}`);
	};

	const onClickSubmit = async (data: IForm) => {
		try {
			const result = await createUseditem({
				variables: {
					createUseditemInput: {
						name: data.name,
						remarks: data.remarks,
						contents: data.contents,
						price: Number(data.price),
						tags: tagList,
						images: fileUrls,
						useditemAddress: {
							zipcode: data.zipcode,
							address: data.address,
							addressDetail: data.addressDetail,
							lat: data.lat,
							lng: data.lng,
						},
					},
				},
			});
			Modal.success({ content: "상품 등록이 완료되었습니다." });
			router.push(`/brand/${result.data.createUseditem._id}`);
		} catch (error: any) {
			Modal.error({ content: error.message });
		}
	};

	const onClickUpdate = async (data: IForm) => {
		try {
			await updateUseditem({
				variables: {
					useditemId: router.query.useditemId,
					updateUseditemInput: {
						name: data.name,
						remarks: data.remarks,
						contents: data.contents,
						price: Number(data.price),
						tags: tagList,
						images: fileUrls,
						useditemAddress: {
							zipcode: data.zipcode,
							address: data.address,
							addressDetail: data.addressDetail,
							lat: data.lat,
							lng: data.lng,
						},
					},
				},
			});
			Modal.success({ content: "상품 수정이 완료되었습니다." });
			router.push(`/brand/${router.query.useditemId}`);
		} catch (error: any) {
			Modal.error({ content: error.message });
		}
	};

	useEffect(() => {
		if (props.data?.fetchUseditem.contents) {
			setValue("contents", props.data?.fetchUseditem.contents);
			setValue("remarks", props.data?.fetchUseditem.remarks);

			trigger("contents");
			trigger("remarks");
		}

		if (props.data?.fetchUseditem.images?.length) {
			setFileUrls([...props.data?.fetchUseditem.images]);
		}
	}, [props.data]);

	return (
		<BrandCreateUI
			data={props.data}
			register={register}
			handleSubmit={handleSubmit}
			formState={formState}
			onClickCancel={onClickCancel}
			onClickSubmit={onClickSubmit}
			onClickUpdate={onClickUpdate}
			onClickAddressSearch={onClickAddressSearch}
			isOpen={isOpen}
			onChangeContents={onChangeContents}
			onChangeRemarks={onChangeRemarks}
			onCompleteAddressSearch={onCompleteAddressSearch}
			isEdit={props.isEdit}
			fileUrls={fileUrls}
			onChangeFileUrls={onChangeFileUrls}
			tagItem={tagItem}
			setTagItem={setTagItem}
			tagList={tagList}
			setTagList={setTagList}
			getValues={getValues}
			onToggleModal={onToggleModal}
		/>
	);
}
