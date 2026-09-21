
export interface IPaginationMeta {
    totalItems : number;
    currentPage:number;
    itemsPerPage:number;

}
export interface IPaginatedResponse<T> {
    data: T[];
    meta: IPaginationMeta;
}