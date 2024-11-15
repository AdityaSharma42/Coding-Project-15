import { assets } from './asset.js';

export function calculatePortfolioValue() {
    return assets.reduce((total, asset)=> total+asset.price*asset.quantity,0);
} 

export function getPortfolioAllocation(){
    const total= calculatePortfolioValue();
    return assets.map(asset=> ({
        name: asset.name,
        allocation: (asset.price* asset.quantity)/total*100,
        id: asset.id
    }));
}