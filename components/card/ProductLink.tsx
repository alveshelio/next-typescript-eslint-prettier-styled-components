import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const StyledProductLink = styled(Link)``

import { Img } from '..'

interface ThumbnailProps {
  href: string;
  children: React.ReactNode;
}

export const ProductLink = ({ href, children }: ThumbnailProps) => (
  <StyledProductLink as="a" href={href}>
    {children}
  </StyledProductLink>
)