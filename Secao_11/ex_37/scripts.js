class CarrinhoCompra {

    constructor(itens, qtde, val) {

        this.itens = itens;
        this.qtde = qtde;
        this.val = val;
    }

    adicionarItem(item) {

        let contador = 0;

        for(let itemCarrinho in this.itens){

            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtde += item.qtde;
                contador = 1;
            }
        }

        if(contador == 0) {

            this.itens.push(item);
        }

        this.qtde += item.qtde;
        this.val += item.preco * item.qtde;
    }

    removerItem(item) {

        for(let itemCarrinho in this.itens){

            if(this.itens[itemCarrinho].id == item.id) {
                
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id})

                this.qtde -= this.itens[itemCarrinho].qtde;
                this.val -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtde;

                this.itens.splice(index, 1);
            }
        }
    }
}

let carrinho = new CarrinhoCompra([

    {
        id: 01,
        nome: "Camisa",
        qtde: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtde: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinho);

carrinho.adicionarItem({id:01, nome:"Camisa", qtde:2, preco:20});

console.log(carrinho);

carrinho.adicionarItem({id:03, nome:"Boné", qtde:1, preco:15});

console.log(carrinho);

carrinho.removerItem({id: 01, nome: "Camisa", qtde: 2, preco: 20});

console.log(carrinho);