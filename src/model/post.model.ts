export interface PostModel {
    userId: number
    id: number
    title:string
    body: string
}

export interface PostQueryModel {
    _limit?: number,
    _page?: number
}