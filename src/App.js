import './App.css';
import { useEffect, useState } from 'react';
import getInstaPosts from './api/instagram';

function App() {
  const [gramPictures, setGramPictures] = useState([]);
  const getPictures = () => {
    getInstaPosts(8).then((res) => {
      res.data && setGramPictures(res.data.posts.data);
    });
  };
  useEffect(() => {
    getPictures();
  }, []);
  return (
    <section className="insta py-12 bg-white">
      <div className="container mx-auto">
        <div className="stories-title flex justify-center flex-col items-center">
          <h1 className="title-font sm:text-3xl lg:text-5xl px-10 mt-8 text-3xl font-extrabold text-base-color ">
            Check out the gram!
          </h1>
          <p className="mb-8 leading-relaxed text-red-500 lg:text-xl 2xl:text-2xl w-auto mt-3 md:py-0">
            Don't miss out our incredible stories
          </p>
        </div>
        <div className="flex flex-wrap lg:px-24">
          {gramPictures.map((each, index) => (
            <div className="lg:w-1/4 md:w-1/2 w-10/12 mx-auto " key={index}>
              <div className="flex relative p-3">
                <img
                  alt="gallery"
                  className=" w-full h-full rounded-md object-cover object-center"
                  src={each.full_picture}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
