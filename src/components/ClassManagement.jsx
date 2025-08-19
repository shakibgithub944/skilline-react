import React from "react";

const ClassManagement = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mt-12">
      <div data-aos="fade-right" className="md:w-5/12">
        <h1 className="text-darken font-semibold text-3xl leading-tight lg:pr-32">
          <span className="text-[#F48C06]">Class Management</span> Tools for
          Educators
        </h1>
        <p className="my-5 lg:pr-14">
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>
      <img data-aos="fade-left" className="md:w-7/12" src="img/gradebook.png" />
    </div>
  );
};

export default ClassManagement;
