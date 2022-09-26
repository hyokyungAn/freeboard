import BrandDetail from "../../../src/components/units/brand/detail/BrandDetail.container";
import BrandCommentList from "../../../src/components/units/brand/detail/comment/list/BrandCommentList.container";
import BrandCommentWrite from "../../../src/components/units/brand/detail/comment/write/BrandCommentWrite.container";

export default function BrandDetailPage() {
	return (
		<>
			<BrandDetail />
			<div style={{ width: "70%" }}>
				<BrandCommentWrite />
				<BrandCommentList />
			</div>
		</>
	);
}
