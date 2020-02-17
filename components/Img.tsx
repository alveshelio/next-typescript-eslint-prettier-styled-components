import React from 'react'
import styled from 'styled-components'

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

interface ImgProps extends React.HTMLAttributes<HTMLImageElement>{
  src: string;
  alt: string;
}

const Img = ({ src, alt, ...rest }: ImgProps) => <StyledImg src={src} alt={alt} {...rest} />

export default Img;