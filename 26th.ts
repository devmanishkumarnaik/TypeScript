//#28---
//Bank account balance---------
class BankAccount{
    private _balance: number = 0;

    public get balance(): number{
        return this._balance;
    }

    public set balance(newBalance: number){
        if(newBalance < 0){
            throw new Error("Invalid Balance");
        }
        this._balance = newBalance;
    }
}

const account = new BankAccount();
account.balance = 10;
console.log(account.balance);

//Temp converter--------
class Temperature{
    private _celsius: number = 0;

    public get celsius():number{
        return this._celsius;
    }

    public set celsius(newCelsius:number){
        this._celsius = newCelsius;
    }

    public get farenhite(): number{
        return (this._celsius*9)/5+32;
    }

    public set farenhite(newFah: number){
        this._celsius = ((newFah - 32)*5)/9;
    }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.farenhite);

temp.farenhite = 77;
console.log(temp.celsius);