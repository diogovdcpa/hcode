class CalcController {
    constructor() {
        this._displayCalc = "0";
        this._currentDate;
        this.initalize();
    }

    initalize(){

        let displayCalcEl = document.querySelector("#display");
        let dateEL = document.querySelector("#data");
        let timeEL = document.querySelector("#hora");

        let valor = "123456";
        if(valor.length > 10){
            displayCalcEl.textContent = "error";
        }else{
            displayCalcEl.textContent= valor;
        }

        dateEL.textContent = "09/06/2020";
        timeEL.textContent = "13:00";
        
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}