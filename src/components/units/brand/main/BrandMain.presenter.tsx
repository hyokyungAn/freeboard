import {
	IBrandMainUIProps,
	IFetchUseditems,
	IFetchUseditemsOfTheBest,
} from "./BrandMain.types";
import * as S from "./BrandMain.styles";
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import Searchbar from "../../../commons/searchbar/Searchbar.container";
import MediumButton from "../../../commons/buttons/medium";
import ProductCard from "../../main/product-card/ProductCard.container";

export default function BrandMainUI(props: IBrandMainUIProps) {
	return (
		<S.Wrapper>
			<S.BestWrapper>
				<S.Text>BEST</S.Text>
				<S.BestProductWrapper>
					{props.bestData?.fetchUseditemsOfTheBest.map(
						(el: IFetchUseditemsOfTheBest) => (
							<ProductCard key={uuidv4()} el={el} pickList={props.pickList} />
						)
					)}
				</S.BestProductWrapper>
			</S.BestWrapper>
			<S.ButtonSearchWrapper>
				<S.ButtonWrapper>
					<MediumButton
						onClick={props.onClickMoveToBrandCreate}
						title="상품 등록"
					/>
				</S.ButtonWrapper>
				<S.SearchWrapper>
					<Searchbar
						refetch={props.refetch}
						onChangeKeyword={props.onChangeKeyword}
					/>
					<S.Img src="/images/search.png" />
				</S.SearchWrapper>
			</S.ButtonSearchWrapper>
			<S.Line />
			<InfiniteScroll
				pageStart={0}
				loadMore={props.loadFunc}
				hasMore={true}
				style={{ width: "90%" }}
				useWindow={true}
			>
				<S.InnerWrapper>
					{props.data?.fetchUseditems.map((el: IFetchUseditems) => (
						<ProductCard key={uuidv4()} el={el} pickList={props.pickList} />
					))}
				</S.InnerWrapper>
			</InfiniteScroll>
		</S.Wrapper>
	);
}
