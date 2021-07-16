import React from "react";

const CoursesGrid = ({ data }) => {
  return (
    <div className="grid grid-rows-1 gap-4 lg:gap-6">
      {data.map((p) => {
        return (
          <div
            className="flex flex-col items-start justify-center w-full h-full gap-3 p-4 rounded-md shadow-sm dark:shadow-inner dark:bg-gray-900 dark:hover:bg-gray-800 transiton dark:text-white bg-gray-100 hover:bg-gray-200 border border-gray-300 dark:border-gray-700 hover:shadow-md"
          >
            <span className="flex flex-row items-center justify-start space-x-2">
              <p className="text-base font-semibold">{p.[0]}</p>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CoursesGrid;