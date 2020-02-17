import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h4``;

interface TitleProps {
  children: React.ReactNode
}
export const Title = ({ children }: TitleProps) => (
  <StyledTitle>{children}</StyledTitle>
)