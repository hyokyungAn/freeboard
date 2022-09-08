import { useAuth } from "../../../src/components/commons/hooks/useAuth";
import BrandDetail from "../../../src/components/units/brand/detail/BrandDetail.container";
import BrandCommentList from "../../../src/components/units/brand/detail/comment/list/BrandCommentList.container";
import BrandCommentWrite from "../../../src/components/units/brand/detail/comment/write/BrandCommentWrite.container";

export default function BrandDetailPage() {
	useAuth();
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