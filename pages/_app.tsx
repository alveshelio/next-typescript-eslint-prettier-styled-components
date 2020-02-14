import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default class MovieApp extends App {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
