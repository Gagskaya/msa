import { RootState } from "../../types/rootState";

export const selectUsers = ({ users }: RootState) => users.items;
export const selectLoggedInUser = ({ users }: RootState) => users.item 