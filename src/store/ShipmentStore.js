import { makeAutoObservable } from "mobx";
import shipments from '../assets/Shipments.json';

export default class ShipmentStore {
    constructor() {
        this._shipment = []
        makeAutoObservable(this)
    }

    setShipment(ship) {
        this._shipment = ship
    }
    get shipment() {
        return this._shipment
    }
}
