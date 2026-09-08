import type {ItransferItem} from "./transferItem.js";

export interface Itransfer {
    fromId: number
    toId: number
    items: ItransferItem[]
    status: string
}
