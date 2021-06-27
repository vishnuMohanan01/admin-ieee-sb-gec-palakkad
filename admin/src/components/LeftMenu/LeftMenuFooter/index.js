/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter({ version }) {
  // PROJECT_TYPE is an env variable defined in the webpack config
  // eslint-disable-next-line no-undef
  const projectType = PROJECT_TYPE;

  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="https://ieeesbgecpkd.org" target="_blank" rel="noopener noreferrer">
          ©
        </A>
        &nbsp;
        <A
          href={`https://ieeesbgecpkd.org`}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          2021
        </A>
        &nbsp;
        <A href="https://ieeesbgecpkd.org" target="_blank" rel="noopener noreferrer">
          IEEE SB GEC Palakkad.
        </A>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired,
};

export default LeftMenuFooter;
