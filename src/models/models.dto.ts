import { GeoJSONWithCRS } from "../types";

class TestDto {
    public id!: number;
    public someGeometry!: GeoJSONWithCRS;
}

export { TestDto };