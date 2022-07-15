import React from 'react';
import styles from './styles.scss';

export default class UIEnhancer extends React.Component{


  renderIcon = () => {
    return (
      <svg className={styles.bannerSVGIcon} xmlns="http://www.w3.org/2000/svg" width="61.305" height="53.895" viewBox="0 0 61.305 53.895">
        <g id="Group_293" data-name="Group 293" transform="translate(903.612 -560.018)">
          <path id="Path_5076" data-name="Path 5076" d="M-845.307,613.913h-55.3a3,3,0,0,1-2.6-1.5,3,3,0,0,1,0-3l27.652-47.9a3,3,0,0,1,2.6-1.5,3,3,0,0,1,2.6,1.5l27.652,47.9a3,3,0,0,1,0,3A3,3,0,0,1-845.307,613.913Zm-50.109-6H-850.5l-22.456-38.9Z"/>
          <rect id="Rectangle_1770" data-name="Rectangle 1770" width="5.061" height="5.033" transform="translate(-875.718 579.48)"/>
          <rect id="Rectangle_1771" data-name="Rectangle 1771" width="5.061" height="16.133" transform="translate(-875.718 587.928)"/>
        </g>
      </svg>
    )
  }

  render() {
    const {subtext, title} = this.props;
    
    return (
      <div className={styles.UIEnhancer}>
        <div className={styles.icon}>{this.renderIcon()}</div>
        <div className={styles.texts}>
          <div className={styles.title}> {title}</div>
          <div className={styles.content} > {subtext} </div>
        </div>      
    </div>
  );
}
};