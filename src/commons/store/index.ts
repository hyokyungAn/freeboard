import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const accessTokenState = atom({
	key: "accessTokenState" + uuidv4(),
	default: "",
});

export const userInfoState = atom({
	key: uuidv4(),
	default: {
		email: "",
		name: "",
	},
});

export const TodayState = atom({
	key: uuidv4(),
	default: [],
});

export const BasketState = atom({
	key: uuidv4(),
	default: [],
});
