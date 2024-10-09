import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: -150px;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 100px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  margin-left: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  @media (max-width: 768px) {
    gap: 15px;
    width: 90%;
    margin-left: 5px;
  }
  @media (max-width: 500px) {
    gap: 15px;
    margin-left: 5px;
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 588px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 300px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 200px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  padding: 12px 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 17px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 15px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`;

function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of the skills which I acquired during my academic period.
        </Desc>
        <SkillsContainer>
          {skills.map((item) => (
            <Skill key={item.title}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <SkillImage src={skill.image} alt={skill.name} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default Skills;
