import React from 'react';
import styled from 'styled-components';
// Import Font Awesome icons
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';  // Importing the latest X (Twitter) icon from Font Awesome 6

// Styled components for the card layout
const Container = styled.div`
  width: 100%; /* Adjust the max width as needed */
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4d1a00;
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 5rem;
`;

const SocialCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 20px; /* Space between cards */
  width: 100%;
  @media (max-width: 600px) {
  grid-template-columns: 1fr; /* Stacks all cards in one column on small screens */
}

`;

const Card = styled.div`
  background: linear-gradient(to right,#f2f4f4,#ebedef ,#eaecee);
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  border: 2px solid transparent;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: #602040; /* Border color on hover */
  }
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  margin-right: 20px;
  margin-left: 10px;
  transition: color 0.3s ease-in-out;

  // Default colors for each social icon
  color: ${({ platform }) => {
    switch (platform) {
      case 'Linkedin':
        return '#0077b5'; // Standard LinkedIn blue
      case 'Github':
        return '#333'; // Standard GitHub grey
      case 'X':
        return '#111'; // Standard X blue (Twitter blue)
      case 'Instagram':
        return '#e4405f'; // Standard Instagram pink
      case 'WhatsApp':
        return '#25d366'; // Standard WhatsApp green
      case 'Email':
        return '#D14836'; // Standard Gmail red
      default:
        return '#4d1a00'; // Default fallback color
    }
  }};
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
    link: "https://www.linkedin.com/in/janhvi-pandey",
    username: "@janhvipandey"
  },
  {
    platform: 'Github',
    icon: <FaGithub />,
    link: "https://github.com/janhvi-pandey",
    username: "@janhvi-pandey"
  },
  {
    platform: 'X',
    icon: <FaXTwitter />,  // Using the latest X icon
    link: "https://x.com/Shiviika23",
    username: "@Shiviika23"
  },
  {
    platform: 'Instagram',
    icon: <FaInstagram />,
    link: "https://www.instagram.com/its_shiviika",
    username: "@its_shiviika"
  },
  {
    platform: 'WhatsApp',
    icon: <FaWhatsapp />,
    link: "https://wa.me/916307976482",
    username: "+91 6307976482"
  },
  {
    platform: 'Email',
    icon: <FaEnvelope />,
    link: "mailto:shivipandey993@gmail.com",
    username: "shivipandey993@gmail.com"
  },
];

export default function Contact() {
  return (
    <div>
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
