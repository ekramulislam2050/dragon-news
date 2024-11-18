import React from "react";

const NewsCard = (props={}) => {
    // console.log(props)
    const {singleNews}=props || {}
    // console.log(singleNews)
  return (
    <div className="overflow-hidden border border-gray-300 rounded-lg  shadow-l">
      {/* Author Info */}
      <div className="flex items-center p-4 bg-gray-100">
        <img
          src={singleNews.author.img}
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <h3 className="font-semibold text-gray-800">{singleNews.author.name}</h3>
          <p className="text-sm text-gray-500">
            {new Date(singleNews.author.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* singleNews Image */}
      <img
        src={singleNews.thumbnail_url}
        alt="Thumbnail"
        className="object-cover w-full h-48"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{singleNews.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{singleNews.details.slice(0, 150)}...</p>
        <button className="mt-4 text-blue-500 hover:underline">Read More</button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t">
        <div className="flex items-center text-orange-400">
          <span className="mr-1">⭐</span>
          <span className="text-sm">{singleNews.rating.number} ({singleNews.rating.badge})</span>
        </div>
        <div className="flex items-center text-gray-500">
          <span className="mr-1">👁</span>
          <span className="text-sm">{singleNews.total_view} views</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
