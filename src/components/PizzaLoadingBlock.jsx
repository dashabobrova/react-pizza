import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="139" cy="141" r="111" />
      <rect x="1" y="268" rx="3" ry="3" width="280" height="26" />
      <rect x="3" y="306" rx="6" ry="6" width="280" height="84" />
      <rect x="2" y="410" rx="3" ry="3" width="89" height="31" />
      <rect x="143" y="399" rx="15" ry="15" width="139" height="31" />
    </ContentLoader>
  );
};
