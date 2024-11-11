import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
import {assets, getAssetById} from './asset.js';

document.addEventListener("DOMContentLoaded", function(){



function displayPortfolio(){
    const total=calculatePortfolioValue();
    const allocation= getPortfolioAllocation();

    document.getElementById('total').textContent= `$${total.toFixed(2)}`;

const allocationList=document.getElementById('Allocation-list');
allocationList.innerHTML='';

allocation.forEach(asset => {
    const listItem= document.createElement('li');
    listItem.textContent= `${asset.name}: ${asset.allocation.toFixed(2)}%`;
   
    allocationList.appendChild(listItem);
});


const purchaseInfoList= document.getElementById('purchase-info');
purchaseInfoList.innerHTML='';
assets.forEach(asset=>{
    const totalPurchased = asset.purchased * asset.price;
    const listItem=document.createElement('li');
    listItem.textContent= `${asset.name}: Purchased ${asset.purchased} units at $${asset.price} each. Total: $${totalPurchased.toFixed(2)}`;
    purchaseInfoList.appendChild(listItem);
})
}
displayPortfolio(); 

const buyTransaction = new Transaction( 1, 'buy', 15);
buyTransaction.execute();

displayPortfolio();

const buyTransaction2= new Transaction (2, 'buy', 25);
buyTransaction2.execute();

displayPortfolio();

const sellTransaction = new Transaction (3, 'sell', 5);
sellTransaction.execute();


displayPortfolio();
});
