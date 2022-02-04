import { RootState } from "../../types/rootState";

export const selectDetails = ({ details }: RootState) => details.item;
