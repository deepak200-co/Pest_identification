import React from 'react';
import './About.css'; 

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Software Developer',
      bio: 'John is a passionate software developer with expertise in web development. He has a strong background in JavaScript, React, and Node.js. John enjoys solving complex problems and building scalable applications. In our recent project, he played a key role in designing and implementing the frontend.',
    },
    {
      name: 'Jane Smith',
      role: 'Data Scientist',
      bio: 'Jane is a skilled data scientist specializing in machine learning and data analysis. With a background in statistics and programming, she excels in turning data into valuable insights. In our recent project, Jane led the data analysis efforts, providing actionable recommendations based on the project requirements.',
    },
    {
      name: 'Bob Johnson',
      role: 'UX/UI Designer',
      bio: 'Bob is a creative UX/UI designer with a keen eye for detail and user experience. He has a solid understanding of design principles and tools. Bob contributed significantly to our recent project by creating intuitive and visually appealing user interfaces that enhance the overall user experience.',
    },
  ];

  return (
    <>
          <h1>About Us</h1>

    <div className="about-us-container">

      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <h2>{member.name}</h2>
          <p className="role">{member.role}</p>
          <p>{member.bio}</p>
        </div>
      ))}
      </div>

      <div className="recent-project">
        <h2>Our Recent Project</h2>
        <p>
          In our recent collaboration, we successfully completed a project that involved [brief description of the project]. Each team member played a crucial role in their respective areas of expertise, contributing to the project's success. We leveraged our diverse skills to deliver a high-quality solution that met the client's requirements.
        </p>
      </div>
    </>
  );
};

export default AboutUsPage;
