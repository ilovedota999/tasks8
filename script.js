class Worker{
	constructor(name, surname, rate, days){
		this._name = name;
		this._surname = surname;
		this._rate = rate;
		this._days = days;
	};
	get name(){
		return this._name;
	};
	get surname(){
		return this._surname;
	};
	get rate(){
		return this._rate;
	};
	get days(){
		return this._days;
	}
	set rateSet(value){
        this._rate = value
    }
    set daysSet(value){
        this._days = value
    }
	getSalary(){
		return rate * days;
	};
}
var worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());	
worker.rateSet=20; //увеличим ставку
worker.daysSet=10; //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10
