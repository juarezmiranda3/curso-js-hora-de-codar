class WordCounter {

    construtor() {

        this.obj = new Object();
    }

    countWords(str){

        return str.match(/(\w+)/g).length;
    }
}

let cont = new WordCounter();

console.log(cont.countWords('hello world'));