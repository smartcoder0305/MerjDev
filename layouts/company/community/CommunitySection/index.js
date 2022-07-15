import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-unfetch';

import * as APIHelper from '../../../../utils/APIHelper';

import CommunitySection from '../../../../components/CommunitySection';
import Pagination from './Pagination';
import styles from './styles.scss';
import Button from '../../../../components/Button';
import { Timeline } from 'react-twitter-widgets'

export default class Community extends React.Component {
  constructor(props) {
    super(props);

    this.fetchNewsArticlesCount = this.fetchNewsArticlesCount.bind(this);
    this.setNewsArticlesCount = this.setNewsArticlesCount.bind(this);
    this.onPaginationClick = this.onPaginationClick.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);

    this.newsArticlesPerPage = 4;

    this.state = {
      newsArticlesCount: null,
      currentPage: 1,
      videos: [],
      showMoreVideos: false
    };
  }

  static propTypes = {
    category: PropTypes.string,
  };

  static defaultProps = {};

  componentDidMount() {
    const { category } = this.props;
    this.fetchVideos();
    this.fetchNewsArticlesCount(category);

  }

  componentDidUpdate(prevProps) {
    const { category, searchQuery } = this.props;
    const prevCategory = prevProps.category;

    if (category !== prevCategory || searchQuery !== prevProps.searchQuery) {
      this.fetchNewsArticlesCount(category);
    }
  }

  async fetchVideos() {
    APIHelper.fetchCommunityVideos().then((resolve) => {
      return resolve.json();
    }).then((result) => {
      this.setState({ videos: result })
    })
  }

  async fetchNewsArticlesCount(category) {
    APIHelper.fetchNewsArticlesCount(category, this.props.searchQuery).then((resolve) => {
      return resolve.json();
    }).then((result) => {
      this.setNewsArticlesCount(result);
    })
  }

  setNewsArticlesCount(newsArticlesCount) {
    this.setState({
      newsArticlesCount,
    });
  }

  onPaginationClick(page) {
    this.setCurrentPage(page);

    window.scrollTo(0, 0); // scroll to top of page
  }

  setCurrentPage(currentPage) {
    this.setState({
      currentPage,
    });
  }

  render() {
    const { newsArticlesCount, currentPage } = this.state;
    const { category } = this.props;

    let pageCount;
    let paginationComponent;

    // When we have the news articles count
    if (newsArticlesCount) {
      pageCount = Math.ceil(newsArticlesCount / this.newsArticlesPerPage);
      // Only display it if there are more than this.newsArticlesPerPage
      if (newsArticlesCount > this.newsArticlesPerPage) {
        paginationComponent = (
          <Pagination
            pageCount={pageCount}
            currentPage={currentPage}
            handleClick={this.onPaginationClick}
          />
        );
      }
    }

    const startAt = pageCount > 0 ? this.newsArticlesPerPage * (currentPage - 1) : 0;


    return (
      <div className="animate">
        <CommunitySection searchQuery={this.props.searchQuery} category={category} startAt={startAt} limitTo={this.newsArticlesPerPage} />

        {paginationComponent}
        <br /><hr />

        {
          this.state.videos.length > 0 ?
            <React.Fragment>
              <div className={styles.merjVideos}>

              <h3>MERJ Videos</h3>

              <div>

                {
                  this.state.videos.map((video, index) => {
                    if (index <= 1) {

                      return (
                        <div className={`${styles.videoContainer}`} key={index}>
                          <div>
                            <iframe src={`https://www.youtube.com/embed/${video.VideoID}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen" allowfullscreen="true"></iframe>
                          </div>
                          <div>
                            {
                              video.Description ? video.Description : null
                            }
                          </div>
                        </div>
                      )
                    } else {
                      return null;
                    }
                  })
                }


                {
                  !this.state.showMoreVideos ?
                    
                    this.state.videos.length > 2 ?
                    <div onClick={() => this.setState({ showMoreVideos: true })} className={`${styles.VideoReadMore}`}><Button>View More</Button></div>
                    : null              
                    :
                    
                    this.state.videos.map((video, index) => {
                      if (index > 1) {

                        return (
                          <div className={`${styles.videoContainerExtra}`} key={index}>

                            <div>
                              <iframe src={`https://www.youtube.com/embed/${video.VideoID}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                            </div>
                            <div>
                              {
                                video.Description ? video.Description : null
                              }
                            </div>
                          </div>
                        )
                      } else {
                        return null;
                      }
                    })
                }
                </div>
                <hr /><br />


              </div>

            </React.Fragment> : null
        }

        <div className={styles.feedContainer}>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'merjexchange'
            }}
            options={{
              username: 'merjexchange',
              height: '600'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        </div>
        <br /><br /><hr />

        <h3>Join Our Social Community</h3>
        <div className={`${styles.communitySocialLinkContainer}`}>

          <a target="_blank" href='https://www.youtube.com/channel/UCXdPo8WFmkIV7VMMxWtWWfQ'>
            <div className={`${styles.communitySocialLink}`}>
              <div className={`${styles.communitySocialLinkTitle}`}>Youtube</div>
              <div><img src='/static/images/social/youtube.svg' /></div>
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/2679722">

            <div className={`${styles.communitySocialLink}`}>
              <div className={`${styles.communitySocialLinkTitle}`}>LinkedIn</div>
              <div><img src='/static/images/social/Linkedin.png' /></div>

            </div>
          </a>
          <a target="_blank" href='https://www.facebook.com/merjexchange'>

            <div className={`${styles.communitySocialLink}`}>
              <div className={`${styles.communitySocialLinkTitle}`}>Facebook</div>
              <div><img src='/static/images/social/facebook.svg' /></div>

            </div>
          </a>

          <a target="_blank" href='https://twitter.com/merjexchange'>

            <div className={`${styles.communitySocialLink}`}>
              <div className={`${styles.communitySocialLinkTitle}`}>Twitter</div>
              <div><img src='/static/images/social/twitter.svg' /></div>

            </div>
          </a>

          <a target="_blank" href='https://t.me/merjexchange'>

            <div className={`${styles.communitySocialLink}`}>
              <div className={`${styles.communitySocialLinkTitle}`}>Telegram</div>
              <div><img src='/static/images/social/telegram.svg' /></div>

            </div>
          </a>

          <a target="_blank" href='https://link.medium.com/HwbjCZ366Y'>

            <div className={`${styles.communitySocialLink}`}>
              <div className={`${styles.communitySocialLinkTitle}`}>Medium</div>
              <div><img style={{ width: '36px' }} src='/static/images/social/medium.png' /></div>

            </div>
          </a>


        </div>

        {/* <div className={styles.feedContainer}>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmerjexchange&tabs=timeline&width=400&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="600" height="600" style={{"border" :"none", "overflow":"hidden"}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div> */}
      </div>

    );
  }
}
