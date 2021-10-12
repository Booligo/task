class DataGetter {
    data;
    randomDate;
    constructor() {
        this.randomDate = [1, 2, 3, { key: 5 }, 6, 7, [1,5,72,], 9];
        this.data = [];
    }
    getData() {
        const tempData = this.data;
        this.data = [];
        return tempData;
    }

    consume(dataValue) {
        this.data.push(dataValue);
        return dataValue
    }

    intervalGet() {
        setInterval(() => {
            console.log(this.consume(this.randomDate[Math.floor(Math.random() * this.randomDate.length)]), 'interval');
        }, 1000);
    }
    setTimeoutGet() {
        setTimeout(() => {
            console.log(this.getData());
        }, 10000);
    }

}

const dataClass = new DataGetter();
