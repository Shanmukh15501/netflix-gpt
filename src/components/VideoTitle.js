import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center px-6 text-white sm:px-10 lg:px-16">
      <div className="max-w-xl pt-16 sm:pt-24 lg:pt-0">
        <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-4 max-w-lg text-sm leading-6 text-gray-200 sm:text-base lg:mt-6 lg:text-lg">
          {overview}
        </p>
        <div className="mt-6 flex gap-4 lg:mt-8">
          <button className="rounded-md bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200 sm:px-8">
          ▶ Play
          </button>

          <button className="rounded-md bg-gray-700/80 px-6 py-3 font-semibold text-white transition hover:bg-gray-600 sm:px-8">
          ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
