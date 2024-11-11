import {assets, getAssetById} from './asset.js';

export class Transaction{
    constructor(assetID, type, quantity){
        this.assetID= assetID;
        this.type= type;
        this.quantity= quantity;
    }

addLogToPage(message){
    const logList= document.getElementById('log-list');
    const listItem= document.createElement('li');
    listItem.textContent= message;
    logList.appendChild(listItem); 
}
execute(){
    const asset= getAssetById(this.assetID);

    if (!asset){
        console.error(`Asset with ID ${this.assetID} was not found.`);
        throw new Error (`Asset with ID ${this.assetID} was not found.`);
    }

    console.log (`A ${this.type} order for ${this.quantity} units of ${asset.name} is being processed.`);

    if(this.type=== 'buy'){
        asset.quantity += this.quantity;
        asset.purchased += this.quantity;
        console.log (`${this.quantity} units of ${asset.name} have been purchased. New Quantity: ${asset.quantity}`);
    } else if (this.type==='sell'){
        if (asset.quantity< this.quantity){
            const errorMessage=`Insufficient quantity for sale of ${asset.name}. Available: ${asset.quantity}, Amount requested: ${this.quantity}`;    
            console.error(errorMessage);
            document.getElementById('error-message').textContent= errorMessage;
            throw new Error(errorMessage);
        }
        asset.quantity -= this.quantity;
        asset.sold +=this.quantity;
        console.log (`${this.quantity} units of ${asset.name} have been sold.`);
    }
}
}
