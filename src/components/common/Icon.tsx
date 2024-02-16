import React, { useEffect, useRef } from "react";

interface Props {
  icon: React.ReactNode;
  color?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<Props> = (props) => {
  const { icon, color, width, height } = props;
  const ref = useRef(null);

  useEffect(() => {
    //@ts-ignore
    const svg = ref.current?.querySelector("svg");

    if (svg) {
      const originalWidth = svg.getAttribute("width");
      const originalHeight = svg.getAttribute("height");
      let cssText = "";
      if (originalHeight && originalWidth && width && height) {
        const scaleX = width / parseInt(originalWidth);
        const scaleY = height / parseInt(originalHeight);
        cssText = cssText.concat(`transform: scale(${scaleX}, ${scaleY});`);
      }
      if (color) {
        cssText = cssText.concat(`fill: ${color} !important;`);
        const path = svg.querySelector("path");
        const g = svg.querySelector("g");
        if (path) {
          path.setAttribute("style", `fill: ${color} !important`);
        }
        if (g) {
          g.setAttribute("style", `fill: ${color} !important`);
        }
      }
      svg.style.cssText = cssText;
    }
  }, [ref.current, color, width, height]);

  return (
    <div
      ref={ref}
      style={{
        width: width ?? "fit-content",
        height: height ?? "fit-content",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="icon-box"
    >
      {icon}
    </div>
  );
};

export default Icon;
