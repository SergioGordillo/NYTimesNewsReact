import React from 'react';

export default function ListOfNews({ newsAttributes }) {
    //I receive here [Object Object Object Object Object Object] Object type

    //   console.log(typeof (newsAttributes));
    //   const objectNews = Object.values(newsAttributes);
    //   console.log(objectNews);


    // const { title, abstract, url } = newsAttributes;

    // console.log(`title: ${title}`);
    // console.log(`abstract: ${abstract}`);
    // console.log(`url: ${url}`);

    return (
        <div className="listofnews-container mb-4">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
        </div>
    )


};