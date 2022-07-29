import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 7rem;
  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 300px;
    border-radius: 1rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 3rem;
    max-width: 50%;
  }
  button {
    background: #6654da;
    width: 200px;
    height: 50px;
    margin-top: 1rem;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 100%;
    transition: all 0.3s;
  }
  button:hover {
    background: #5848c2;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }
  .release-date {
    opacity: 0.5;
  }
`
