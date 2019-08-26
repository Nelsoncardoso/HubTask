import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  a {
    width: 100%;
    text-align: center;
    border: 2px dashed #dedede;
    background: none;
    color: #7b7b7b;
    font-size: 20px;
    font-weight: normal;
    padding: 10px 20px;
    border-radius: 7px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Task = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 9px 0px rgba(237,237,237,1);

  header {
    title {
      display: contents;
      color: '#999';
      font-size: 20px;
      font-weight: normal;
    }
    actions {
      float: right;
      button {
        border: 0px;
        background: none;
      }
      a {
        cursor: pointer;
        font-size: 18px;
        padding: 0px;
        border: 0px;
      }
      .delete {
        color: #ff6c6c;
        margin-left: 7px;
        cursor: pointer;
      }
      .edit {
        color: #3591f7
        cursor: pointer;
      }
    }
  }

  span {
    display: block;
    margin-top: 3px;
    color: '#999';
  }
`;