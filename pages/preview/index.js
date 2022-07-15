import React, { Component } from 'react';
import styles from './styles.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MetaTags from 'react-meta-tags';
import * as APIHelper from '../../utils/APIHelper';
export class VideoEmbed extends Component {
  constructor(){
    super();
    this.state = {
      videoData: {

      },
      dataLoaded: false
    }   
  }

  componentDidMount(){
    let id = window.location.search.replace("?", "").split('=')[1];


    APIHelper.getVideoMetaData(id).then((resolve) => {
      return resolve.json();
    }).then((result) => {
      if(result.length > 0) {
        this.setState({videoData: {...result[0]}, dataLoaded: true});
      } else {
        window.location.assign('/');
      }
    }).catch((err) => {
      window.location.assign('/');
    })


  }



  updateMetaTag = () => {
    const {videoData, dataLoaded} = this.state;
    if(dataLoaded && videoData) {
      return (
        <MetaTags>
          <meta property="og:title" content={videoData.Title} />
          <meta property="og:url" content={window.location.pathname} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={videoData.Description}  />
          {
            videoData.Image ?
            <meta property="og:image" content={videoData.Image.url}  /> : null
          }
        </MetaTags>
      )
    } else {
      return null;
    }
  }
  
  render() {
    
    return (
        <main>
        {this.updateMetaTag()}
          <div className={styles.previewVideoContainer}>
            {
              this.state.dataLoaded ?
              <iframe src={`https://www.youtube.com/embed/${this.state.videoData.VideoID}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" autoplay="true" allowfullscreen="true"></iframe>
              : null
            }
          </div>
        </main>

    );
  }
}

export default VideoEmbed;