import React from "react";

const Tools = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-16">
      <div data-aos="fade-right" className="md:w-1/2 lg:pl-14">
        <h1 className="text-darken font-semibold text-3xl lg:pr-56 leading-10">
          <span className="text-[#F48C06]">Tools</span> For Teachers And
          Learners
        </h1>
        <p className="text-[#696984] my-4 lg:pr-32">
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>
      <img
        data-aos="fade-left"
        className="md:w-1/2"
        src="img/girl-with-books.png"
      />
    </div>
  );
};

export default Tools;
