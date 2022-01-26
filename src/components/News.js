import React from 'react';

export default function News({ newsAttributes }) {
  //I receive here [Object Object Object Object Object Object] Object type

  console.log(typeof (newsAttributes));
  const objectNews = Object.values(newsAttributes);
  console.log(objectNews);


  // const { title, abstract, url } = newsAttributes;

  // console.log(`title: ${title}`);
  // console.log(`abstract: ${abstract}`);
  // console.log(`url: ${url}`);

  return (
    <div className="news-container pointer">
      <img className="news-img" src="https://www.larazon.es/resizer/uw3MSDE8hPhCPKnmhz3x2x-hjGc=/1260x840/smart/filters:format(webp):quality(65)/cloudfront-eu-central-1.images.arcpublishing.com/larazon/JSELGN73UNCCDPCYU2XIROYQYI.jpg" />
      <h3 className="news-title">Hello</h3>
      <p className="news-abstract">sdadadadadadasdadadadsasdadsadadsadasdasdasdasdadsdada</p>
    </div>
  )


};