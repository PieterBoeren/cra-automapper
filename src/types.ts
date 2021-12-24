import { GeoJSON } from "geojson";

// Extend the GeoJSON type with a crs, definition of the crs is taken from the proj4leaflet declarations
type GeoJSONWithCRS = GeoJSON & { crs?: { type: string; properties: { name: string } } };

export type { GeoJSONWithCRS };
