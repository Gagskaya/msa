import { RootState } from "../../types/rootState";

export const selectUsers = ({ users }: RootState) => users.items;
export const selectUser = ({ users }: RootState) => users.item 