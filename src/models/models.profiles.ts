import { Converter, convertUsing, createMap, forMember, MappingProfile } from "@automapper/core";
import { Proj4GeoJSONFeature } from "proj4leaflet";
import { TestDto } from "./models.dto";
import { TestViewModel } from "./models.vm";
import { GeoJSONWithCRS } from "../types";

const testProfile: MappingProfile = (mapper) => {
  createMap(mapper, TestDto, TestViewModel,
  forMember(
    (destination) => destination.someGeometry,
    //mapFrom((source) => source.someGeometry)
    convertUsing(geoJsonConverter, (source) => source.someGeometry)
  ));
  ;
};

const geoJsonConverter: Converter<GeoJSONWithCRS, Proj4GeoJSONFeature> = {
  convert(source) {
    console.log("In:");
    console.log(source);

    const out: Proj4GeoJSONFeature = { type: "Feature", geometry: { type: "Point", coordinates: [99999, 99999] }, properties: [], crs: {type:"Pieter", properties: {name: "Pieter"}} };

    console.log("Out:");
    console.log(out);

    return out;
  },
};

export { testProfile };
