import React from "react";
import PropTypes from "prop-types";

const Skeleton = ({ width, height, count }) => {
  const items = Array.from({ length: count });

  return (
    <div className="flex flex-wrap gap-4">
      {items.map((_, index) => (
        <div
          key={index}
          className="bg-gray-300 animate-pulse rounded-lg"
          style={{ width, height }}
        />
      ))}
    </div>
  );
};

Skeleton.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  count: PropTypes.number,
};

Skeleton.defaultProps = {
  width: "100%",
  height: "150px",
  count: 1,
};

export default Skeleton;
