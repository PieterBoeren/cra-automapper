import { GeoJSON } from "geojson";

class TestDto {
    public id!: number;
    public someGeometry!: GeoJSON & { crs?: { type: string; properties: { name: string } } };
}

export { TestDto };