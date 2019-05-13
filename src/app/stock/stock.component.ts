import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stockId: number;

  constructor(private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.stockId = this.routerInfo.snapshot.queryParams["id"];//第一种参数传递
    //  this.stockId = this.routerInfo.snapshot.params["id"];//从详情组件跳转到详情组件不能用快照这种方式；
    this.routerInfo.params.subscribe((params: Params) => this.stockId = params["id"]);//通过scbscribe订阅方式解决，从一个组件路由到相同的组件
  }

}
