import React, { useEffect } from 'react';
import { PageStore } from '../../../utils/stores/';
import { useUser, useLayout } from '../../../utils/hooks/';
import { addClassname } from '../../../utils/helpers/';
import { SearchField } from './SearchField';
import { HeaderRight } from './HeaderRight';
import { HeaderLeft } from './HeaderLeft';

import '../../../../css/styles.scss';
import './PageHeader.scss';
import '../PageMain.scss';

function Alerts() {
  function onClickAlertClose() {
    const alertElem = this.parentNode;

    addClassname(alertElem, 'hiding');

    setTimeout(
      function () {
        if (alertElem && alertElem.parentNode) {
          alertElem.parentNode.removeChild(alertElem);
        }
      }.bind(this),
      400
    );
  }

  setTimeout(
    function () {
      const closeBtn = document.querySelectorAll('.alert.alert-dismissible .close');

      let i;
      if (closeBtn.length) {
        i = 0;
        while (i < closeBtn.length) {
          closeBtn[i].addEventListener('click', onClickAlertClose);
          i += 1;
        }
      }
    }.bind(this),
    1000
  ); // TODO: Improve this.
}

function MediaUploader() {
  let uploaderWrap = document.querySelector('.media-uploader-wrap');

  if (uploaderWrap) {
    let preUploadMsgEl = document.createElement('div');

    preUploadMsgEl.setAttribute('class', 'pre-upload-msg');
    preUploadMsgEl.innerHTML = PageStore.get('config-contents').uploader.belowUploadArea;

    uploaderWrap.appendChild(preUploadMsgEl);
  }
}

export function PageHeader(props) {
  const { isAnonymous } = useUser();
  const { visibleMobileSearch } = useLayout();

  useEffect(() => {
    Alerts();

    if (void 0 === PageStore.get('current-page') || 'add-media' === PageStore.get('current-page')) {
      MediaUploader();
    }
  }, []);

  return (
    <header
      className={
        'page-header' + (visibleMobileSearch ? ' mobile-search-field' : '') + (isAnonymous ? ' anonymous-user' : '')
      }
    >
      <div className={"wp-header"}>
        <div className={"wp-logo"}>
            <a href="https://sektor-wp-epsilon.kragosh.de/">
              <img
                width="200"
                height="85"
                src="https://sektor-wp-epsilon.kragosh.de/wp-content/uploads/2025/01/epsilon-logo-normal.png"
                alt="The Epsilon Program"
              />
            </a>
        </div>

        <div className={"wp-nav"}>
          <ul className="wp-block-navigation__container is-responsive items-justified-right wp-block-navigation wp-dark-mode-bg-image">
            <li className="wp-block-navigation-item wp-block-navigation-link has-medium-font-size wp-dark-mode-bg-image">
              <a
                className="wp-block-navigation-item__content wp-dark-mode-bg-image"
                href="https://sektorrp-epsilon-media.kragosh.de/"
              >
                <img src={"https://sektor-wp-epsilon.kragosh.de/wp-content/uploads/2025/01/etv.png"} height={"36px"}/>
              </a>
            </li>
            <li className="wp-block-navigation-item wp-block-navigation-link has-medium-font-size wp-dark-mode-bg-image">
              <a
                className="wp-block-navigation-item__content wp-dark-mode-bg-image"
                href="https://sektor-wp-epsilon.kragosh.de/unsere-lehre/"
              >
                <span className="wp-block-navigation-item__label wp-dark-mode-bg-image">Unsere Lehre</span>
              </a>
            </li>
            <li className="wp-block-navigation-item wp-block-navigation-link has-medium-font-size wp-dark-mode-bg-image">
              <a
                className="wp-block-navigation-item__content wp-dark-mode-bg-image"
                href="https://sektor-wp-epsilon.kragosh.de/unser-zentrum/"
              >
                <span className="wp-block-navigation-item__label wp-dark-mode-bg-image">Unser Zentrum</span>
              </a>
            </li>
            <li className="wp-block-navigation-item wp-block-navigation-link has-medium-font-size wp-dark-mode-bg-image">
              <a
                className="wp-block-navigation-item__content wp-dark-mode-bg-image"
                href="https://sektor-wp-epsilon.kragosh.de/wer-wir-sind/"
              >
                <span className="wp-block-navigation-item__label wp-dark-mode-bg-image">Die Reiniger</span>
              </a>
            </li>
            <li className="wp-block-navigation-item wp-block-navigation-link has-medium-font-size wp-dark-mode-bg-image">
              <a
                className="wp-block-navigation-item__content wp-dark-mode-bg-image"
                href="https://sektor-wp-epsilon.kragosh.de/for-celebrities/"
              >
                <span className="wp-block-navigation-item__label wp-dark-mode-bg-image">For Celebrities</span>
              </a>
            </li>
            <li className="wp-block-navigation-item wp-block-navigation-link has-medium-font-size wp-dark-mode-bg-image">
              <a
                className="wp-block-navigation-item__content wp-dark-mode-bg-image"
                href="https://sektor-wp-epsilon.kragosh.de/frag-epsilon/"
              >
                <span className="wp-block-navigation-item__label wp-dark-mode-bg-image">Frag Epsilon</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

/*
        <HeaderLeft/>
        <SearchField/>
        <HeaderRight/>
*/