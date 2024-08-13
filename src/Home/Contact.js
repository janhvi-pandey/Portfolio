import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import leetcodeIcon from '../images/leetCode.png'; 

import { FaXTwitter } from 'react-icons/fa6'; 

// Styled components for the card layout
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 2.3rem;
  font-weight: bold;
  color: #4d1a00;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 5rem;
`;

const SocialCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 30px; /* Space between cards */
  width: 96%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack cards in one column */
  }
`;

const Card = styled.div`
  background: linear-gradient(to right, #f2f3f4, #f2f4f4, #eaecee);
  border: 1px solid black;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    transform: scale(1.03);
    border: 2px solid black;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: #602040; /* Border color on hover */
  }
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  margin-right: 20px;
  margin-left: 10px;
  transition: color 0.3s ease-in-out;
  display: flex; /* Ensure image and icon are centered */

  // Default colors for each social icon
  color: ${({ platform }) => {
    switch (platform) {
      case 'Linkedin':
        return '#0077b5'; 
      case 'Github':
        return '#333'; 
      case 'X':
        return '#1DA1F2'; 
      case 'Instagram':
        return '#e4405f'; 
      case 'Email':
        return '#D14836';
      default:
        return '#4d1a00'; 
    }
  }};

  img {
    width: 26px; /* Set the image size */
    height: 25.3px;
    margin-top:3px;
    border-radius:3px;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
`;

const PlatformName = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  color: #000; /* Black color */
  transition: color 0.3s ease-in-out;
`;

const Username = styled.p`
  font-size: 0.9rem; /* Smaller size */
  margin: 0;
  color: #000; /* Black color */
`;

// Social media data
const socialLinks = [
  {
    platform: 'Linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/janhvipandey/',
    username: '@janhvipandey',
  },
  {
    platform: 'Github',
    icon: <FaGithub />,
    link: 'https://github.com/janhvi-pandey',
    username: '@janhvi-pandey',
  },
  {
    platform: 'X',
    icon: <FaXTwitter />,
    link: 'https://x.com/Shiviika23',
    username: '@Shiviika23',
  },
  {
    platform: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/its_shiviika',
    username: '@its_shiviika',
  },
  {
    platform: 'LeetCode',
    icon: <img src={leetcodeIcon} alt="LeetCode" />, 
    link: 'https://leetcode.com/u/janhvipandey/',
    username: '@janhvipandey',
  },
  {
    platform: 'Email',
    icon: <FaEnvelope />,
    link: 'mailto:shivipandey993@gmail.com',
    username: 'shivipandey993@gmail.com',
  },
];

export default function Contact() {
  return (
    <div id="contact">
      <Header>Contact Me</Header>

      <Container>
        <SocialCardsContainer>
          {socialLinks.map((social) => (
            <a
              href={social.link}
              style={{ textDecoration: 'none', color: 'black' }}
              key={social.platform}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <IconWrapper platform={social.platform}>
                  {social.icon}
                </IconWrapper>
                <TextWrapper>
                  <PlatformName>{social.platform}</PlatformName>
                  <Username>{social.username}</Username>
                </TextWrapper>
              </Card>
            </a>
          ))}
        </SocialCardsContainer>
      </Container>
    </div>
  );
}
