import InfiniteScroll from "react-infinite-scroller";
import BrandCommentItem from "../item/BrandCommentItem.container";
import * as S from "./BrandCommentList.styles";
import { IBrandCommentListUIProps } from "./BrandCommentList.types";

export default function BrandCommentListUI(props: IBrandCommentListUIProps) {
	return (
		<InfiniteScroll pageStart={0} loadMore={props.loadFunc} hasMore={true}>
			<S.Wrapper>
				{props.data?.fetchUseditemQuestions.map((el: any) => (
					<S.CommentWrapper key={el._id}>
						<BrandCommentItem
							key={el._id}
							el={el}
							onClickDelete={props.onClickDelete}
						/>
					</S.CommentWrapper>
				))}
			</S.Wrapper>
		</InfiniteScroll>
	);
}
