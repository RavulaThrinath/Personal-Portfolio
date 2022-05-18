import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonArticle = () => {
  return (
    <div className="skeleton-blog">
      <div>
        <SkeletonElement type="imagee" />p
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
};

export default SkeletonArticle;
