import { React, useState, useEffect } from "react";
import Thumbnail from "../thumbnail/thumbnail";
import { Container, Row, Col } from "react-bootstrap";

// const thumbnail-matrix = () => {
//   return (
//     <div>

//     </div>
//   );
// }

// export default thumbnail-matrix;

export default function ThumbnailMatrix({ thumbnails, getData }) {
  const [row, setRow] = useState([]);
  const [matrix, setMatrix] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [rowCount, setRowCount] = useState(4);
  const [columnCount, setColumnCount] = useState(
    (thumbnails.length + 1) / rowCount,
  );

  useEffect(() => {
    // if screenWidth =< 1024px rowLenght === 4
    // if screenWidth > 1024px && < 852px rowLenght === 3
    // if screenWidth > 852px && < 568px rowLenght === 2
    // if screenWidth > 568px rowLenght === 1
  }, [row, matrix]);
  // console.log("ThumbnailMatrix: Run");
  return (
    <div className="thumbnail-matrix">
      <section>
        <div>
          <h2>Full-Stack Apps:</h2>
          <span>Web apps built: concept, design and deployment</span>
        </div>
        <div className="thumb-nail__wrapper">
          {thumbnails
            .filter((p) => p.type === "app")
            .map((thumbnail) => {
              return (
                <>
                  <Thumbnail
                    key={thumbnail.key}
                    id={thumbnail.id}
                    type={thumbnail.type}
                    img={thumbnail.img}
                    name={thumbnail.name}
                    desc={thumbnail.desc}
                    short_desc={thumbnail.short_desc}
                    role={thumbnail.role}
                    tech={thumbnail.tech}
                    challenge={thumbnail.challenge}
                    solution={thumbnail.solution}
                    source={thumbnail.source}
                    getData={getData}
                  />
                </>
              );
            })}
        </div>
      </section>
      <section>
        <div>
          <h2>Web Analytics Implementation:</h2>
          <span>
            Integrated Web Analytics suites: design and implementation
          </span>
        </div>
        <div className="thumb-nail__wrapper">
          {thumbnails
            .filter((p) => p.type === "analytics")
            .map((thumbnail) => {
              return (
                <>
                  <Thumbnail
                    key={thumbnail.key}
                    id={thumbnail.id}
                    type={thumbnail.type}
                    img={thumbnail.img}
                    name={thumbnail.name}
                    desc={thumbnail.desc}
                    short_desc={thumbnail.short_desc}
                    role={thumbnail.role}
                    tech={thumbnail.tech}
                    challenge={thumbnail.challenge}
                    solution={thumbnail.solution}
                    source={thumbnail.source}
                    getData={getData}
                  />
                </>
              );
            })}
        </div>
      </section>
      <section>
        <div>
          <h2>AI Projects:</h2>
          <span>AI systems intergations: concept, design and deployment</span>
        </div>
        <div className="thumb-nail__wrapper">
          {thumbnails
            .filter((p) => p.type === "app")
            .map((thumbnail) => {
              return (
                <>
                  <Thumbnail
                    key={thumbnail.key}
                    id={thumbnail.id}
                    type={thumbnail.type}
                    img={thumbnail.img}
                    name={thumbnail.name}
                    desc={thumbnail.desc}
                    short_desc={thumbnail.short_desc}
                    role={thumbnail.role}
                    tech={thumbnail.tech}
                    challenge={thumbnail.challenge}
                    solution={thumbnail.solution}
                    source={thumbnail.source}
                    getData={getData}
                  />
                </>
              );
            })}
        </div>
      </section>

      <section>
        <div>
          <h2>Demos:</h2>
          <span>Demos built to learn new concepts</span>
        </div>
        <div className="thumb-nail__wrapper">
          {thumbnails
            .filter((p) => p.type === "demo")
            .map((thumbnail) => {
              return (
                <>
                  <Thumbnail
                    key={thumbnail.key}
                    id={thumbnail.id}
                    type={thumbnail.type}
                    img={thumbnail.img}
                    name={thumbnail.name}
                    desc={thumbnail.desc}
                    short_desc={thumbnail.short_desc}
                    role={thumbnail.role}
                    tech={thumbnail.tech}
                    challenge={thumbnail.challenge}
                    solution={thumbnail.solution}
                    source={thumbnail.source}
                    getData={getData}
                  />
                </>
              );
            })}
        </div>
      </section>
    </div>
    // <div className="thumbnail-matrix">
    //   Full Rows
    //   {console.log({ thumbnails })}
    //   {/*
    //   loop (length of items) times
    //   if loop i =< (length of items)
    //      return <div className="thumbnail-matrix__row">
    //                 loop (rowLength) times
    //                 create thumbnail and add to row
    //             </div>

    //   */}
    //   {thumbnails.forEach((thumbnail, i) => {
    //     {
    //       thumbnails.forEach((thumbnail, i) => {
    //         console.log({ rowCount, i });
    //         if (i % rowCount === 0) {
    //           console.log("NEW ROW");
    //           return (
    //             // extract to component
    //             // slice array from (array.length+1 - i -> i)
    //             // pass new array to row
    //             <div className="thumbnail-matrix__row">
    //               loop x times create thumbnail and add to row
    //             </div>
    //           );
    //         }
    //       });
    //       return;
    //     }
    //   })}
    //   {/* {thumbnails.map((thumbnail, index) => {
    //     // let matrix = [];
    //     // let row = []; // loop inside loop to maintain overall item loop

    //     if ((index + 1) % 3 !== 0) {
    //       console.log("add to row");
    //       let el = "project.name";
    //       console.log({
    //         row,
    //       });
    //       setRow(el);
    //       // row.push(el);
    //       console.log({
    //         row,
    //       });
    //     } else {
    //       // push row into matrix and create new row
    //       console.log("add to matrix");
    //       setMatrix(row);
    //       // matrix.push(row); // row = [];
    //     }

    //     console.log({
    //       index,
    //       row,
    //       matrix,
    //     }); // render matrix
    //     return;
    //   })} */}
    // </div>
  );
}
