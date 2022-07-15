import React from 'react';

import styles from './styles.scss';
import * as APIHelper from '../../../utils/APIHelper';
import Spinner from '../../../components/Spinner';

export class FaqSection extends React.Component {
  constructor() {
    super();
    this.state = {
      FAQS: [],
      selected: '',
      loading: true
    }
  }


  componentDidMount() {
    APIHelper.fetchFAQS().then((resolve) => {
      return resolve.json();
    }).then((response) => {
      var query = window.location.hash.substr(1);
      this.setState({FAQS: response,selected: Number(query), loading: false}, () => {
        this.scrollToQuestion(query);
      })
    });

  }

   scrollToQuestion =(question) => {
    setTimeout(() => {
      let element = document.getElementById(`#${question}`);
      if (element !== null) {
        window.scrollTo({ top: element.offsetTop - 150, behavior: 'smooth' });
      }
    }, 100);
  }
  
   selectQuestion = (question) => {
    if(this.state.selected === question) {
      this.setState({ selected: '' });
    } else {
      this.setState({ selected: question }, () => {
        this.scrollToQuestion(question);
      });
    }
  }


    render() {
      const {FAQS} = this.state;
      return (
        <section>
          
        <h1>FAQs</h1>

        <div  className={styles.faq}>
        {
          this.state.loading ? <div className={`${styles.loader}`}> <Spinner/> </div> :
          FAQS && FAQS.map((item) => {
                return (
                  <div id={`#${item.Index}`} key={item.Index} className={`${styles.faqIndexSpacing}`}>
                    <div key={item.Index} className={`${this.state.selected === item.Index ? styles.show : styles.hide} ${styles.closeIcon}`} onClick={() => this.selectQuestion('')}>
                      <svg className={`${styles.iconSmall}`} xmlns="http://www.w3.org/2000/svg" viewBox="-11856 6485 30 30"> 
                        <path id="Path_161" data-name="Path 161" style={{ fill: 'white'}} d="M30,3.642,26.272,0,15,11.272,3.642,0,0,3.642,11.272,15,0,26.272,3.642,30,15,18.642,26.272,30,30,26.272,18.642,15Z" transform="translate(-11856 6485)"/>
                      </svg>
                    </div>
                    <div className={`${this.state.selected === item.Index ? styles.hide : styles.show} ${styles.openIcon}`} onClick={() => this.selectQuestion(item.Index)}>
                      <svg style={{top: '3px'}} className={`${styles.iconSmall}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"> 
                        <path style={{ fill: 'white'}} id="Path_13" data-name="Path 13" d="M14,8.225V5.775H8.225V0H5.775V5.775H0v2.45H5.775V14h2.45V8.225Z"/>
                      </svg>   
                    </div>
                    <div onClick={() => this.selectQuestion(item.Index)} className={`${this.state.selected === item.Index ? styles.faqItemActive : styles.faqItem}`}> <div>{item.Index}</div> <p >{item.Title} </p> </div>
                    <div className={`${styles.faqItemContent} ${this.state.selected === item.Index ? styles.slideOut : styles.slideIn} ${this.state.selected === item.Index ? styles.show : styles.hide}`}>
                      {
                        <div dangerouslySetInnerHTML={{ __html: item.Content }}/>
                      }
                    
                    </div>
                  </div>
                );
              })
            } 
        </div>

      </section>
    );
  }
};

FaqSection.propTypes = {};
FaqSection.defaultProps = {};

export default FaqSection;
