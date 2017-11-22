import React from 'react';

const Intro = props => {
  return (
    <div>
      <h3 className="title hd-font">HATIM DAMRA</h3>
      <h5 className="subtitle hd-font">Full Stack Web Developer</h5>
      <div className="grid-wrapper-info">
        <div>
          <p className="hd-font-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            soluta impedit non hic, accusamus perferendis amet architecto quod
            ducimus sit ullam ab quisquam porro incidunt eos! Molestias beatae
            iure nihil sed dolorum, ad provident eveniet voluptate tempora a
            voluptatum. Nisi blanditiis quisquam enim. Recusandae architecto
            perferendis fugit ex sunt?
          </p>
        </div>
        <div>
          <img src="/assets/mypic.png" alt="My Pic" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
