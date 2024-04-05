import React from "react";
import { useEffect, useRef } from "react";
import { COUNTRIES_DATA } from "./data/countries_data";
import useDeviceDetect from "../common/DeviceDetect";

const DOT_COLOR = "#346AF7";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

export default function CustomGlobe() {
  const { isDesktop } = useDeviceDetect();
  const globeEl = useRef();
  const gData = [...COUNTRIES_DATA].map((data) => ({
    lat: data.latitude,
    lng: data.longitude,
    maxR: 2,
    propagationSpeed: 1,
    repeatPeriod: 1200,
  }));

  useEffect(() => {
    const MAP_CENTER = { lat: 0, lng: 0, altitude: 1.5 };
    if (globeEl.current) {
      //@ts-ignore
      globeEl.current.pointOfView(MAP_CENTER, 0);
      // Auto-rotate
      //@ts-ignore
      globeEl.current.controls().autoRotate = true;
      //@ts-ignore
      globeEl.current.controls().autoRotateSpeed = 1.5;
      //disable zoom
      //@ts-ignore
      globeEl.current.controls().enableZoom = false;
      const directionalLight = globeEl.current
        //@ts-ignore
        .lights()
        .find((obj3d: any) => obj3d.type === "DirectionalLight");
      if (directionalLight) {
        directionalLight.position.set(0, 0, 0); // change light position to see the specularMap's effect
        directionalLight.color.set("#ffffff");
      }
      const ambientLight = globeEl.current
        //@ts-ignore
        .lights()
        .find((obj3d: any) => obj3d.type === "AmbientLight");
      if (ambientLight) {
        ambientLight.position.set(0, 10, 0);
        ambientLight.color.set("#ffffff");
      }
    }
  }, [globeEl]);

  return (
    <Globe
      //@ts-ignore
      globeImageUrl="/images/world-map.jpg"
      ref={globeEl}
      backgroundColor="rgba(0,0,0,0)"
      labelsData={[
        ...COUNTRIES_DATA.map((country) => {
          return {
            lat: country.latitude,
            lng: country.longitude,
            label: "",
          };
        }),
      ]}
      labelSize={1}
      showAtmosphere={true}
      atmosphereColor="rgba(0,0,0,0)"
      atmosphereAltitude={0.07}
      labelText={"label"}
      labelColor={() => DOT_COLOR}
      labelDotRadius={0.7}
      labelAltitude={0}
      labelResolution={1000}
      height={isDesktop ? 568 : 330}
      ringsData={gData}
      ringColor={() => DOT_COLOR}
      ringMaxRadius="maxR"
      ringPropagationSpeed="propagationSpeed"
      ringRepeatPeriod="repeatPeriod"
      ringResolution={1000}
    />
  );
}
