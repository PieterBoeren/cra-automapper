import { Converter, convertUsing, MappingProfile } from "@automapper/core";
import { Proj4GeoJSONFeature } from "proj4leaflet";
import { TestDto } from "./models.dto";
import { TestViewModel } from "./models.vm";

const testProfile: MappingProfile = (mapper) => {
  mapper.createMap(TestDto, TestViewModel)
  .forMember(
    (destination) => destination.someGeometry,
    //mapFrom((source) => source.someGeometry)
    convertUsing(geoJsonConverter, (source) => source.someGeometry)
  );
};

const geoJsonConverter: Converter<GeoJSON.GeoJSON, Proj4GeoJSONFeature> = {
  convert(source) {
    debugger;
    return { type: "Feature", geometry: { type: "Point", coordinates: [125.6, 10.1] }, properties: [] };
  },
};

export { testProfile };
