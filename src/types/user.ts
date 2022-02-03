export interface User {
    id: number
    login: string
    password: string
}

export interface UsersState {
    items: null | User[]
    item: null | User
}