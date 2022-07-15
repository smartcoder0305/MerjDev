import React from 'react';
import styles from './styles.scss';
import Nav from './mobileTabs';
import mobileStyles from './mobileTabs/styles.scss';

export class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          showMobileMenu: false
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
      if (window.innerWidth > 480) {
        this.setState({showMobileMenu: false});
      }
    }

    componentDidUpdate() {
    }

    render(){
          const { isReadOnly, isBankingAccountAvailable, isUSACitizen } = this.props
          return (
          <div style={{'margin-top': '-5px'}}>  
            <div className={`${styles.tabBackground}`}>

              <div className={`${styles.tabContainer}`}>
                
                <a href='/portfolio' className={`${this.props.activeTab === 'portfolio' ? styles.tabBtnActive : styles.tabBtn}`}>Portfolio</a>
                <a href='/details' className={`${this.props.activeTab === 'details' ? styles.tabBtnActive : styles.tabBtn}`}>My Details</a>
                <a href='/legal' className={`${this.props.activeTab === 'legal' ? styles.tabBtnActive : styles.tabBtn}`}>Legal Undertakings</a>
                <a href='/documents-upload' className={`${this.props.activeTab === 'documents' ? styles.tabBtnActive : styles.tabBtn}`}>My Documents</a>

              </div>


              <div className={`${styles.tabContainerMobile}`}>
                <div className={`${styles.menuTitleMobile}`}>{this.props.title}</div>
                <div onClick={() => {this.setState({showMobileMenu: !this.state.showMobileMenu})}} className={`${styles.menuBtnMobile}`}>
                  { !this.state.showMobileMenu ? "MENU": "CLOSE"}
                  <div className={`${styles.menuBtnIcon}`}> 
                    <svg  className={`${styles.iconSmall} ${styles.icon}`}  xmlns="http://www.w3.org/2000/svg" viewBox="-11862.886 6017.886 10 6.228"> 
                        <path id="Path_157" data-name="Path 157"  className={`${styles.menuIcon}`}  d="M1.228,10,0,8.743,3.743,5,0,1.228,1.228,0l5,5Z" transform="translate(-11852.886 6017.886) rotate(90)"/>
                    </svg>
                </div>
                </div>


              </div>
            </div>
            { 
              this.state.showMobileMenu ?
              <div className = {mobileStyles.mobileMenu}>
                <div className={styles.navWrapper}>
                    <Nav readOnly={isReadOnly} isBankingAccountAvailable={isBankingAccountAvailable} isUSACitizen={isUSACitizen} />
                </div>
              </div>
              : null
            }
          </div>      
          );
      }
}