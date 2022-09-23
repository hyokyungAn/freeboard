import * as S from "./HomeMain.styles";
import { v4 as uuidv4 } from "uuid";
import { IHomeMainUIProps } from "./HomeMain.types";
import ProductCard from "./product-card/ProductCard.container";

export default function HomeMainUI(props: IHomeMainUIProps) {
	return (
		<S.Wrapper>
			<S.Text>New Arrival</S.Text>
			<S.InnerWrapper>
				{props.data?.fetchUseditems.slice(0, 8).map((el: any) => (
					<ProductCard key={uuidv4()} el={el} pickList={props.pickList} />
				))}
			</S.InnerWrapper>
		</S.Wrapper>
	);
}
