import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: any = [];

  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {
        id: 1, title: 'carets',
        description: `Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec,
                          iaculis ultrices ante.Integer vitae suscipit nisi.Morbi dignissim risus sit amet orci porta,
        eget aliquam purus
                          sollicitudin.Cras eu metus felis.Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet
                          eros.Donec accumsan nisi purus, quis euismod ex volutpat in.Vestibulum eleifend eros ac
                          lobortis aliquet.`, price: 10, imageUrl: 'assets/images/img-pro-01.jpg', tag: 'sale'
      },
      {
        id: 2, title: 'tomato', description: `Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec,
                          iaculis ultrices ante.Integer vitae suscipit nisi.Morbi dignissim risus sit amet orci porta,
          eget aliquam purus
                          sollicitudin.Cras eu metus felis.Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet
                          eros.Donec accumsan nisi purus, quis euismod ex volutpat in.Vestibulum eleifend eros ac
                          lobortis aliquet.`, price: 50, imageUrl: 'assets/images/img-pro-02.jpg', tag: 'new'
      },
      {
        id: 3, title: 'lasura', description: `Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec,
                          iaculis ultrices ante.Integer vitae suscipit nisi.Morbi dignissim risus sit amet orci porta,
            eget aliquam purus
                          sollicitudin.Cras eu metus felis.Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet
                          eros.Donec accumsan nisi purus, quis euismod ex volutpat in.Vestibulum eleifend eros ac
                          lobortis aliquet.`, price: 35, imageUrl: 'assets/images/img-pro-03.jpg', tag: 'sale'
      },
      {
        id: 1, title: 'carets',
        description: `Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec,
                          iaculis ultrices ante.Integer vitae suscipit nisi.Morbi dignissim risus sit amet orci porta,
        eget aliquam purus
                          sollicitudin.Cras eu metus felis.Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet
                          eros.Donec accumsan nisi purus, quis euismod ex volutpat in.Vestibulum eleifend eros ac
                          lobortis aliquet.`, price: 10, imageUrl: 'assets/images/img-pro-01.jpg', tag: 'sale'
      },
      {
        id: 2, title: 'tomato', description: `Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec,
                          iaculis ultrices ante.Integer vitae suscipit nisi.Morbi dignissim risus sit amet orci porta,
          eget aliquam purus
                          sollicitudin.Cras eu metus felis.Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet
                          eros.Donec accumsan nisi purus, quis euismod ex volutpat in.Vestibulum eleifend eros ac
                          lobortis aliquet.`, price: 50, imageUrl: 'assets/images/img-pro-02.jpg', tag: 'new'
      },
      {
        id: 3, title: 'lasura', description: `Integer tincidunt aliquet nibh vitae dictum. In turpis sapien, imperdiet quis magna nec,
                          iaculis ultrices ante.Integer vitae suscipit nisi.Morbi dignissim risus sit amet orci porta,
            eget aliquam purus
                          sollicitudin.Cras eu metus felis.Sed arcu arcu, sagittis in blandit eu, imperdiet sit amet
                          eros.Donec accumsan nisi purus, quis euismod ex volutpat in.Vestibulum eleifend eros ac
                          lobortis aliquet.`, price: 35, imageUrl: 'assets/images/img-pro-03.jpg', tag: 'sale'
      }

    ]
  }

}
