import React from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import { Img, NavBar } from '../components'
import { Body, Card, CardFooter, Description, Price, ProductLink, Title } from '../components/card'
import { ProductItem } from '../components/product'

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.div`
  padding: 0 10px;
`

const Container = styled.div``

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

const CategoryContainer = styled.div``

const CategoryList = styled.div``

const Carousel = styled.div``

const CarouselIndicators = styled.ol``

const CarouselInner = styled.div``

const CarouselItem = styled.div``

const CarouselControl = styled.a``

const Footer = styled.footer``

const Home = () => (
  <>
    <GlobalStyles/>
    <Wrapper>
      <Head>
        <title>Home</title>
      </Head>

      <Container>
        <Row>
          <NavBar/>

          <CategoryContainer>

            <h1 className="my-4">Shop Name</h1>
            <CategoryList>
              <a href="#" className="list-group-item">Category 1</a>
              <a href="#" className="list-group-item">Category 2</a>
              <a href="#" className="list-group-item">Category 3</a>
            </CategoryList>

          </CategoryContainer>

          <div className="col-lg-9">
            <Carousel id="carouselExampleIndicators" data-ride="carousel">
              <CarouselIndicators>
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"/>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"/>
              </CarouselIndicators>
              <CarouselInner role="listbox">
                <CarouselItem>
                  <Img className="d-block Img-fluid" src="http://placehold.it/900x350" alt="First slide"/>
                </CarouselItem>
                <CarouselItem>
                  <Img className="d-block Img-fluid" src="http://placehold.it/900x350" alt="Second slide"/>
                </CarouselItem>
                <CarouselItem>
                  <Img className="d-block Img-fluid" src="http://placehold.it/900x350" alt="Third slide"/>
                </CarouselItem>
              </CarouselInner>
              <CarouselControl href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
              </CarouselControl>
              <CarouselControl href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
              </CarouselControl>
            </Carousel>

            <Row>

              <ProductItem>
                <Card>
                  <ProductLink href="#">
                    <Img src="http://placehold.it/700x400" alt=""/>
                  </ProductLink>
                  <Body>
                    <Title>
                      <ProductLink href="#">Item One</ProductLink>
                    </Title>
                    <Price>$24.99</Price>
                    <Description>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
                    </Description>
                  </Body>
                  <CardFooter><small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></CardFooter>
                </Card>
              </ProductItem>

              <ProductItem>
                <Card>
                  <ProductLink href="#">
                    <Img src="http://placehold.it/700x400" alt=""/>
                  </ProductLink>
                  <Body>
                    <Title>
                      <ProductLink href="#">Item Two</ProductLink>
                    </Title>
                    <Price>$24.99</Price>
                    <Description>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
                    </Description>
                  </Body>
                  <CardFooter><small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></CardFooter>
                </Card>
              </ProductItem>

              <ProductItem>
                <Card>
                  <ProductLink href="#">
                    <Img src="http://placehold.it/700x400" alt=""/>
                  </ProductLink>
                  <Body>
                    <Title>
                      <ProductLink href="#">Item Three</ProductLink>
                    </Title>
                    <Price>$24.99</Price>
                    <Description>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
                    </Description>
                  </Body>
                  <CardFooter><small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></CardFooter>
                </Card>
              </ProductItem>

              <ProductItem>
                <Card>
                  <ProductLink href="#">
                    <Img src="http://placehold.it/700x400" alt=""/>
                  </ProductLink>
                  <Body>
                    <Title>
                      <ProductLink href="#">Item Four</ProductLink>
                    </Title>
                    <Price>$24.99</Price>
                    <Description>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
                    </Description>
                  </Body>
                  <CardFooter><small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></CardFooter>
                </Card>
              </ProductItem>

              <ProductItem>
                <Card>
                  <ProductLink href="#">
                    <Img className="card-Img-top" src="http://placehold.it/700x400" alt=""/>
                  </ProductLink>
                  <Body>
                    <Title>
                      <ProductLink href="#">Item Five</ProductLink>
                    </Title>
                    <Price>$24.99</Price>
                    <Description>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
                    </Description>
                  </Body>
                  <CardFooter><small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></CardFooter>
                </Card>
              </ProductItem>

              <ProductItem>
                <Card>
                  <ProductLink href="#">
                    <Img src="http://placehold.it/700x400" alt=""/>
                  </ProductLink>
                  <Body>
                    <Title>
                      <ProductLink href="#">Item Six</ProductLink>
                    </Title>
                    <Price>$24.99</Price>
                    <Description>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!
                    </Description>
                  </Body>
                  <CardFooter><small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small></CardFooter>
                </Card>
              </ProductItem>
            </Row>
          </div>
        </Row>
      </Container>
      <Footer>
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
      </Footer>
    </Wrapper>
  </>
)

export default Home