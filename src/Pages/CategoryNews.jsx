import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const CategoryNews = () => {
  const {data:news} = useLoaderData()
  // console.log(data)
  return (
    <div>
      <div className="pl-4">
        <h1 className="font-semibold ">Dragon News Home</h1>
        <p className="text-sm text-gray-400">   ({news.length})news is found in this category </p>
      </div>
      <div>
        {
          news.map((singleNews)=><NewsCard news={singleNews} key={singleNews._id}> </NewsCard>)
        }
      </div>
    </div>
  );
};

export default CategoryNews;