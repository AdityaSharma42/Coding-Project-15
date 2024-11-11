export const assets=[
    {id: 1, name: 'TSMC', type: 'stock', price: 110, quantity: 75, purchased: 0, sold: 0},
    {id: 2, name: 'Vanguard', type: 'bond', price: 75, quantity: 130, purchased:0, sold:0},
    {id: 3, name: 'Aramco', type: 'bond', price: 80, quantity: 40, purchased:0, sold:0},   
];

export function getAssetById(id){
    return assets.find(asset=> asset.id===id);
}