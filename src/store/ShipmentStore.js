import { makeAutoObservable } from "mobx"

export default class ShipmentStore {
    constructor() {
        this._shipment = [
            {orderNo:"zz-450581-11385595-4210084", date:"10/16/2019", customer: "NXP Semiconductors N.V.", trackingNo :"TP-724057-72553473-5647860", status :"'In Transit'", consignee: "Koppers Holdings Inc."},
            {orderNo:"kk-275651-64476049-3346442", date:"8/20/2019", customer: "Triumph Bancorp, Inc.", trackingNo :"TP-011637-13598236-2700556", status :"'Delivered'", consignee: "Celsius Holdings, Inc."},
            {orderNo:"nz-906145-26850629-1813784", date:"7/10/2019", customer: "Inter Parfums, Inc.", trackingNo :"TP-065338-70937481-7664135", status :"'Delivered'", consignee: "Hovnanian Enterprises Inc"}
        ]
        makeAutoObservable(this)
    }

    setShipment(ship) {
        this._shipment = ship
    }
    get shipment() {
        return this._shipment
    }
}