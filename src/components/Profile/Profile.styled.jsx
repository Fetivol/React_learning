import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  background-color: #f0eeee;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const NameText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
`;
export const TagText = styled.p`
  font-size: 0.8rem;
  color: #888;
  margin: 2px 0;
`;

export const ProfileList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    flex: 1;
    border-right: 1px solid #ddd;

    &:last-child {
      border-right: none;
    }
    &:hover {
      background-color: #f0f0f0;
    }
    transition: background-color 0.3s ease;
    span {
      font-size: 0.9rem;
      color: #888;
      &:last-child {
        font-weight: bold;
        color: #333;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    li {
      border-right: none;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
