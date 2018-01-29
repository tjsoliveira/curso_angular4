class Order {

    constructor(
        public endereco: string,
        public numero: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = [],
        public id?: string
    ){}
}

class OrderItem {

  constructor(public quantity: number,
            public menuId: string){

  }

}

export {OrderItem, Order}
