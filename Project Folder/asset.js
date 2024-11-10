export const assets=[
    {id: 1, name: 'TSMC', type: 'stock', price: 110, quantity: 75},
    {id: 2, name: 'Vanguard', type: 'bond', price: 75, quanitty: 130},
    {id: 3, name: 'Aramco', type: 'bond', price: 80, quantity: 40},   
];

export function getAssetById(id){
    return assets.find(asset=> asset.id===id);
}