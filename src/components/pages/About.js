import { Grid } from '@mui/material';
import React from 'react';
import selfImage from '../../assets/images/me.jpg'

const styles = {
  section: {
    // background: '#00000060',
    marginTop: 40,
    textAlign: "center"
  },
  image: {
    borderRadius: 100,
    border: "3px solid #007b6d",
  }
  
};

export default function About() {
  return (
    <div style={styles.section}>
      <Grid container justifyContent="center">
      <img src={selfImage} alt="Me in front of some trees" height="300px" style={styles.image} />
      </Grid>
      <h2>About Me</h2>
      <p>
      Welcome to my portfolio. My name is Robert Bishop and I'm currently a student in a Web Coding Bootcamp being run by the University of Washington. I've had an interest in computers going back to when I started tinkering with my personal computer in high school. After high school I pursued an Associates program in computer networking through a tech college in Arizona before returning to my home in the PNW.
      </p>
      <p>
      After college I held on to the interest but didn't really pursue IT work in a professional capacity. For the past 10 years I've been working for a family owned copy machine business handling both hardware and connectivity job tickets. A few months back I started talking to a family member about this Coding Bootcamp, the more I read up on it the more I felt like it would be the perfect fit for me. I used to enjoy picking through custom codes for Myspace pages and this would give me a chance to learn how to actually create whole pages from scratch. I really enjoy working through the process of trying to take an idea that's in my mind and spending time creating it in code.
      </p>
      <p>
      When I'm not in class or at work I spend most of my time with my wife and son. I also enjoy gaming on my xbox, tinkering with the project car in the garage and occasionally attending concerts with my wife.
      </p>
      <p>
      I'm looking forward to continuing to build this page as I learn more styles of coding and adding on more sample works as I create them.
      </p>
    </div>
  );
}