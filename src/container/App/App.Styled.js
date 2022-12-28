import styled from 'styled-components';
export const StyledAppHeader = styled.header`
padding: 60px;
`

export const StyledAppHeaderNavigationBar = styled.div`
display: flex;
justify-content: space-between;

.navigation-list{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .search {
    cursor: pointer;
  }
  .search>input[type=text]{
    margin: 0 6px;
    border: none;
    outline: none;
    border-radius: 4px;
    width: 0;
    transition: all .5s ease;
  }
  .search>input[type=text].open{
    padding: 5px 10px;
  width: 200px;
  }
  .navigation > ul {
    display: flex;
    list-style: none;
    margin: 10px;
  }
  .navigation > ul > li {
    padding: 10px 20px;
    cursor: pointer;
  }
  .navigation > ul > li:hover {
    color: rgba(0, 0, 0, 0.8);
  }
}`

export const StyledSignInButton = styled.button`
color: white;
border: none;
padding: 10px 25px;
background-color: #3b7844;
border-radius: 8px;
outline: none;
cursor: pointer;
transition: all 0.4s;

.sign-in-btn:hover {
  background-color: rgb(59, 120, 68, 0.3);
}
&:hover{
  background-color: rgb(59, 120, 68, 0.3);
}
`

export const StyledAppHeaderContent = styled.div`
margin-top: 110px;
.content-title{
  font-size: 48px;
  font-weight: 600;
}
.content-text{
  margin-top: 65px;
  font-size: 16px;
  line-height: 2;
}
`

export const StyledExploerButton = styled.button`
margin-top: 65px;
padding: 10px 25px;
background-color: #3b7844;
border: none;
outline: none;
margin-top: 65px;
color: white;
border-radius: 8px;
cursor: pointer;
`