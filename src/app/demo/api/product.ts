interface InventoryStatus {
    label: string;
    value: string;
}
export interface Product {
    id?: number;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
    amount?:number;
    stok?:number;
}