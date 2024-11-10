import {assets, getAssetById} from './asset.js';

export class transaction{
    constructor(assetID, type, quantity){
        this.assetID=assetID;
        this.type= type;
        this.quantity= quantity;
    }
}

execute(){
    const asset= getAssetById(this.assetID);

    if(this.type=== 'buy'){
        asset.quantity += this.quantity;
        console.log (`${this.quantity} units of ${asset.name} has been purchased.`);
    } else if (this.type==='sell'){
        if (asset.quantity< this.quantity){
            throw new Error(`Insufficient quantity for sale of ${asset.name}.`);    
        }
        asset.quantity -= this.quantity;
        console.log (`${this.quantity} units of ${asset.name} has been sold.`);
    }
}