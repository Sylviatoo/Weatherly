import { processRequest } from "../library/api-weather";

interface TimeAndPath {
  time: number;
  path: string;
}

interface SatelliteProps {
  infrared: TimeAndPath[];
}

interface RainTileLayerRootProps {
  version: number;
  generated: number;
  host: string;
  radar: {
    past: TimeAndPath[];
    nowcast: TimeAndPath[];
  };
  satellite: SatelliteProps;
}

export async function getRainTileLayerRoot(): Promise<RainTileLayerRootProps> {
  return await processRequest<RainTileLayerRootProps>(
    "https://api.rainviewer.com/public/weather-maps.json",
  );
}

export function getRainTyleLayerPngPath(hostPath: string, path: string) {
  return `${hostPath}${path}/256/{z}/{x}/{y}/7/1_0.png`;
}

export function getRainTyleLayerPaths(rootProps: RainTileLayerRootProps) {
  const tileLayersPath = rootProps.radar.past.map((item) =>
    getRainTyleLayerPngPath(rootProps.host, item.path),
  );
  tileLayersPath.concat(
    rootProps.radar.nowcast.map((item) =>
      getRainTyleLayerPngPath(rootProps.host, item.path),
    ),
  );
  return tileLayersPath;
}
