import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import leetcodeIcon from "../images/leetCode.png";

// Social media data
const socialLinks = [
  {
    platform: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/janhvipandey/",
    username: "@janhvipandey",
  },
  {
    platform: "Github",
    icon: <FaGithub />,
    link: "https://github.com/janhvi-pandey",
    username: "@janhvi-pandey",
  },
  {
    platform: "X",
    icon: <FaXTwitter />,
    link: "https://x.com/Shiviika23",
    username: "@Shiviika23",
  },
  {
    platform: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/its_shiviika",
    username: "@its_shiviika",
  },
  {
    platform: "LeetCode",
    icon: <img src={leetcodeIcon} alt="LeetCode" />,
    link: "https://leetcode.com/u/janhvipandey/",
    username: "@janhvipandey",
  },
  {
    platform: "Email",
    icon: <FaEnvelope />,
    link: "mailto:shivipandey993@gmail.com",
    username: "shivipandey993@gmail.com",
  },
];

// Styled Components
const Section = styled.section`
  padding: 4rem 2rem;
  background-color: #fafafa;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #4d1a00;
  margin-bottom: 4rem;
`;

const Header2 = styled.h4`
  font-size: 1.5rem;
  color: rgb(107, 24, 51);
  margin-bottom: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
`;

const SharedBox = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledForm = styled.form`
  flex-grow: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #aaa;
    background: transparent;
    color: #333;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-bottom: 2px solid rgb(107, 24, 51);
    }
  }

  textarea {
    resize: none;
    overflow: hidden;
    min-height: 40px;
  }

  ::placeholder {
    color: #777;
  }
`;

const SubmitButton = styled.input`
  background: #602040;
 
  color: #fff;
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: rgb(85, 19, 52);
  }
`;

const MessageText = styled.p`
  margin-top: 1.2rem;
  font-size: 0.9rem;
  font-weight: 460;
  font-style: italic;
`;

const SuccessMessage = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  color: green;
  font-weight: 500;
`;

const SocialCards = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
   background:#f4ecf7 ;
  text-decoration: none;
  transition: all 0.3s;
  border: 1px solid grey;

  &:hover {
    transform: scale(1.03);
    background: #fff;
    border: 1px solid black;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.6rem;
  margin-right: 1rem;

  color: ${({ platform }) => {
    switch (platform) {
      case "Linkedin":
        return "#0077b5";
      case "Github":
        return "#333";
      case "X":
        return "#1DA1F2";
      case "Instagram":
        return "#e4405f";
      case "Email":
        return "#D14836";
      default:
        return "#000";
    }
  }};

  img {
    width: 26px;
    height: 26px;
    border-radius: 4px;
  }
`;

const TextWrapper = styled.div``;

const PlatformName = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: black;
`;

const Username = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #444;
`;

// Component
export default function Contact() {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mldjqzle", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      form.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <Section id="contact">
      <Header>Contact Me</Header>
      <ContentWrapper>
        {/* Contact Form */}
        <SharedBox>
          <StyledForm ref={formRef} onSubmit={handleSubmit}>
            <Header2>Say Hello 😊</Header2>
            <FormGroup>
              <input
                type="text"
                name="yourname"
                placeholder="Your Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </FormGroup>
            <FormGroup>
              <textarea
                name="message"
                placeholder="Your Message"
                required
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
              />
            </FormGroup>
            <SubmitButton type="submit" value="Send Message" />
            {success && <SuccessMessage>Thank you! Message sent ✅</SuccessMessage>}
            <MessageText>
              Or feel free to reach out through my socials —{" "}
              <span style={{ fontWeight: "500" }}>I’d love to connect!</span>
            </MessageText>
          </StyledForm>
        </SharedBox>

        {/* Social Links */}
        <SharedBox>
          <SocialCards>
            {socialLinks.map(({ platform, icon, link, username }) => (
              <Card key={platform} href={link} target="_blank" rel="noreferrer">
                <IconWrapper platform={platform}>{icon}</IconWrapper>
                <TextWrapper>
                  <PlatformName>{platform}</PlatformName>
                  <Username>{username}</Username>
                </TextWrapper>
              </Card>
            ))}
          </SocialCards>
        </SharedBox>
      </ContentWrapper>
    </Section>
  );
}
