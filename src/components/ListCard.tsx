import styles from '../styles/components/ListCard.module.css'
import { useState } from 'react'

interface ProductObj {
  id: string,
  createdAt: string,
  name: string,
  price: string,
  image?: string,
  stock: number
}

const ListCard = (props: any) => {
    const listObj = [
        {
        "id": "1",
        "createdAt": "2019-09-02T12:58:54.103Z",
        "name": "Rustic Metal Fish",
        "price": "289.00",
        "image": "http://lorempixel.com/640/480/food",
        "stock": 65171
      },
      {
        "id": "2",
        "createdAt": "2019-09-02T07:59:58.181Z",
        "name": "Sleek Wooden Soap",
        "price": "430.00",
        "image": "http://lorempixel.com/640/480/transport",
        "stock": 91260
      },
      {
        "id": "3",
        "createdAt": "2019-09-02T22:14:05.454Z",
        "name": "Small Cotton Shoes",
        "price": "993.00",
        "image": "http://lorempixel.com/640/480/sports",
        "stock": 36608
      },
      {
        "id": "4",
        "createdAt": "2019-09-02T07:36:56.139Z",
        "name": "Ergonomic Frozen Towels",
        "price": "259.00",
        "image": "http://lorempixel.com/640/480/nightlife",
        "stock": 92065
      },
      {
        "id": "5",
        "createdAt": "2019-09-02T05:18:30.393Z",
        "name": "Awesome Metal Pants",
        "price": "69.00",
        "image": "http://lorempixel.com/640/480/sports",
        "stock": 54930
      },
      {
        "id": "6",
        "createdAt": "2019-09-02T16:22:03.725Z",
        "name": "Intelligent Cotton Bacon",
        "price": "14.00",
        "image": "http://lorempixel.com/640/480/fashion",
        "stock": 88996
      },
      {
        "id": "7",
        "createdAt": "2019-09-02T02:26:28.018Z",
        "name": "Ergonomic Plastic Tuna",
        "price": "477.00",
        "image": "http://lorempixel.com/640/480/food",
        "stock": 73117
      },
      {
        "id": "8",
        "createdAt": "2019-09-02T14:25:31.508Z",
        "name": "Intelligent Soft Keyboard",
        "price": "764.00",
        "image": "http://lorempixel.com/640/480/nature",
        "stock": 14875
      },
      {
        "id": "9",
        "createdAt": "2019-09-02T11:52:19.177Z",
        "name": "Awesome Cotton Keyboard",
        "price": "575.00",
        "image": "http://lorempixel.com/640/480/transport",
        "stock": 55458
      },
      {
        "id": "10",
        "createdAt": "2019-09-02T02:17:08.337Z",
        "name": "Small Fresh Shoes",
        "price": "67.00",
        "image": "http://lorempixel.com/640/480/fashion",
        "stock": 38268
      },
      {
        "id": "11",
        "createdAt": "2019-09-02T04:41:05.149Z",
        "name": "Fantastic Metal Cheese",
        "price": "312.00",
        "image": "http://lorempixel.com/640/480/technics",
        "stock": 43921
      },
      {
        "id": "12",
        "createdAt": "2019-09-02T12:39:09.964Z",
        "name": "Generic Granite Bike",
        "price": "345.00",
        "image": "http://lorempixel.com/640/480/people",
        "stock": 77846
      },
      {
        "id": "13",
        "createdAt": "2019-09-02T06:35:40.678Z",
        "name": "Tasty Granite Computer",
        "price": "585.00",
        "image": "http://lorempixel.com/640/480/business",
        "stock": 67599
      },
      {
        "id": "14",
        "createdAt": "2019-09-02T00:51:18.473Z",
        "name": "Rustic Plastic Keyboard",
        "price": "567.00",
        "image": "http://lorempixel.com/640/480/nightlife",
        "stock": 15619
      },
      {
        "id": "15",
        "createdAt": "2019-09-02T13:03:07.618Z",
        "name": "Sleek Steel Hat",
        "price": "73.00",
        "image": "http://lorempixel.com/640/480/nature",
        "stock": 3784
      },
      {
        "id": "16",
        "createdAt": "2019-09-02T03:28:32.706Z",
        "name": "Gorgeous Metal Tuna",
        "price": "966.00",
        "image": "http://lorempixel.com/640/480/city",
        "stock": 39055
      },
      {
        "id": "17",
        "createdAt": "2019-09-02T04:04:19.662Z",
        "name": "Handmade Rubber Pants",
        "price": "334.00",
        "image": "http://lorempixel.com/640/480/city",
        "stock": 12305
      }
    ]

    function handlerProductListing() {
      return listObj.map((obj: ProductObj) => {
        return (
          <tr key={obj.id}>
            <td>{obj.name}</td>
            <td>{obj.price}</td>
            <td>{obj.stock}</td>
            <td id={obj.id} onClick={e => handlerBuyBtn(obj.id)}>Adicionar ao Carrinho</td>
          </tr>
        )
      })
    }

    function handlerBuyBtn(id: string) {
      const buyBtn = document.getElementById(`${id}`)
      if(buyBtn) {
        buyBtn.innerHTML = 'Adicionado'
        if(props.addedItems[0].length > 0) {
          const hasInArray = props.addedItems[0].indexOf(id)
          if(hasInArray === -1) {
            props.addedItems[1]([...props.addedItems[0], id])
          }
        } else {
          props.addedItems[1]([id])          
        }
      }
    }
    
    return (
        <div className={styles.container}>
            <table>
              <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                </tr>
              </thead>
              {/*** List ***/}
              <tbody>
                { handlerProductListing() }
              </tbody>
            </table>
        </div>
    )
}

export default ListCard