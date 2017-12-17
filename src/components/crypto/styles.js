import React from 'react';
import styled from 'styled-components';

export const ErrSpan = styled.span`
  color: red;
  font-weight:bolder;
  display:block;
`

export const QueryInput = styled.input`
  border: none;
  border-bottom:1px solid black;
  display:block;
  margin:20px;  
`

export const Title = styled.h4`
  margin-top: 6vh;
  margin-left:20px;
`

export const Button = styled.button`
  background-color: transparent;
  border:none;
  margin-left: 12px;
  width:20vw;

  &:hover{
    cursor: pointer;
    background-color: silver;
  }
`

export const CryptoList = styled.div`
  margin:auto;
  margin-top:15vh;
  padding:3px;
`
export const Coin = styled.div`
  border: 1px solid black;
  padding:8px 0;
  box-shadow: 3px 3px 3px silver;
  border-radius: 8px;
  text-align:center;
  margin:auto;
  width:70vw;
  margin-bottom:18px;

  @media (min-width: 768px){
    width:100%;
  }
`
