import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Spinner from '../spinner/Spinner';
import {
  fetchProfileAsync,
  incStr,
  decStr,
  incInt,
  decInt,
  incAgi,
  decAgi,
  incLuk,
  decLuk,
  sendProfileAsync,
} from '../../redux/actions/profileActions';
import {
  HeroProfileContainer,
  HeroProfileDetail,
  HeroProfileDetailTitle,
  HeroProfileDetailValue,
  HeroProfileAp,
  HeroProfileApValue,
} from './HeroProfile.styles';

function HeroProfile({
  history,
  match,
  profile,
  fetchProfileAsyncConnect,
  incStrConnect,
  decStrConnect,
  incIntConnect,
  decIntConnect,
  incAgiConnect,
  decAgiConnect,
  incLukConnect,
  decLukConnect,
  ap,
  sendProfileAsyncConnect,
}) {
  const { heroId } = match.params;

  useEffect(() => {
    fetchProfileAsyncConnect(heroId);
  }, [fetchProfileAsyncConnect, heroId]);

  const handleInc = (value, type) => {
    if (ap > 0) {
      if (type === 'str') {
        incStrConnect(value);
      } else if (type === 'int') {
        incIntConnect(value);
      } else if (type === 'agi') {
        incAgiConnect(value);
      } else if (type === 'luk') {
        incLukConnect(value);
      }
    } else {
      alert('AP not enoght');
    }
  };

  const handleDec = (value, type) => {
    if (value > 0) {
      if (type === 'str') {
        decStrConnect(value);
      } else if (type === 'int') {
        decIntConnect(value);
      } else if (type === 'agi') {
        decAgiConnect(value);
      } else if (type === 'luk') {
        decLukConnect(value);
      }
    } else {
      alert('Abilitiy value or AP can not be less than 0');
    }
  };

  const handleSave = () => {
    if (ap === 0) {
      // setAp(0);
      sendProfileAsyncConnect(heroId, profile);
      history.push('/heroes');
    } else {
      alert('There still have unassigned AP');
    }
  };

  if (profile) {
    return (
      <HeroProfileContainer>
        <HeroProfileDetail>
          <HeroProfileDetailTitle>
            STR：
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={() => handleInc(profile.str, 'str')} />
            </Fab>
            <HeroProfileDetailValue>{profile.str}</HeroProfileDetailValue>
            <Fab color="secondary" aria-label="remove">
              <RemoveIcon onClick={() => handleDec(profile.str, 'str')} />
            </Fab>
          </HeroProfileDetailTitle>
          <HeroProfileDetailTitle>
            INT：
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={() => handleInc(profile.int, 'int')} />
            </Fab>
            <HeroProfileDetailValue>{profile.int}</HeroProfileDetailValue>
            <Fab color="secondary" aria-label="remove">
              <RemoveIcon onClick={() => handleDec(profile.int, 'int')} />
            </Fab>
          </HeroProfileDetailTitle>
          <HeroProfileDetailTitle>
            AGI：
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={() => handleInc(profile.agi, 'agi')} />
            </Fab>
            <HeroProfileDetailValue>{profile.agi}</HeroProfileDetailValue>
            <Fab color="secondary" aria-label="remove">
              <RemoveIcon onClick={() => handleDec(profile.agi, 'agi')} />
            </Fab>
          </HeroProfileDetailTitle>
          <HeroProfileDetailTitle>
            LUK：
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={() => handleInc(profile.luk, 'luk')} />
            </Fab>
            <HeroProfileDetailValue>{profile.luk}</HeroProfileDetailValue>
            <Fab color="secondary" aria-label="remove">
              <RemoveIcon onClick={() => handleDec(profile.luk, 'luk')} />
            </Fab>
          </HeroProfileDetailTitle>
        </HeroProfileDetail>
        <HeroProfileAp>
          <HeroProfileApValue>Remaining AP：{ap}</HeroProfileApValue>
          <Button variant="contained" color="primary" onClick={handleSave}>
            SAVE
          </Button>
        </HeroProfileAp>
      </HeroProfileContainer>
    );
  }

  return <Spinner />;
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
  ap: state.profile.ap,
});

HeroProfile.propTypes = {
  heroId: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object,
  profile: PropTypes.object,
  fetchProfileAsyncConnect: PropTypes.func,
  incStrConnect: PropTypes.func,
  decStrConnect: PropTypes.func,
  incIntConnect: PropTypes.func,
  decIntConnect: PropTypes.func,
  incAgiConnect: PropTypes.func,
  decAgiConnect: PropTypes.func,
  incLukConnect: PropTypes.func,
  decLukConnect: PropTypes.func,
  ap: PropTypes.number,
  sendProfileAsyncConnect: PropTypes.func,
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      fetchProfileAsyncConnect: fetchProfileAsync,
      incStrConnect: incStr,
      decStrConnect: decStr,
      incIntConnect: incInt,
      decIntConnect: decInt,
      incAgiConnect: incAgi,
      decAgiConnect: decAgi,
      incLukConnect: incLuk,
      decLukConnect: decLuk,
      sendProfileAsyncConnect: sendProfileAsync,
    }
  )(HeroProfile)
);
