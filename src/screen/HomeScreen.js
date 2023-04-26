import React from 'react'
import'./HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Request';

const HomeScreen = () => {

  return (
    <div className='homescreen'>
        <Nav/>
        <Banner/>

        <Row title='Netflix Original'fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>

        <Row title='Treadinf Now'fetchUrl={requests.fetchTrending}/>
        <Row title='Top Rated'fetchUrl={requests.fetchTopRated}/>
        <Row title='Action Movie'fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movie'fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movie'fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance Movie'fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentaries'fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  )
}

export default HomeScreen
