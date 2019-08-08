import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Spinner from '../spinner/Spinner';
import {
  HeroProfileContainer,
  HeroProfileDetail,
  HeroProfileDetailTitle,
  HeroProfileDetailValue,
  HeroProfileAp,
  HeroProfileApValue,
} from './HeroProfile.styles';

function HeroProfile({ heroId, history }) {
  const [profile, setProfile] = useState(null);
  const [ap, setAp] = useState(0);

  const getProfile = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`
      );
      const data = await response.data;
      setProfile(data);
    } catch (error) {
      console.log(error);
    }
  }, [heroId]);

  const sendProfile = useCallback(async () => {
    try {
      await axios.patch(
        `https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`,
        profile
      );
    } catch (error) {
      console.log(error);
    }
  }, [heroId, profile]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  const incStr = () => {
    if (ap > 0) {
      setProfile({ ...profile, str: profile.str + 1 });
      setAp(ap - 1);
    } else {
      alert('AP not enoght');
    }
  };

  const decStr = () => {
    if (profile.str > 0) {
      setProfile({ ...profile, str: profile.str - 1 });
      setAp(ap + 1);
    } else {
      alert('STR value or AP can not be less than 0');
    }
  };

  const incInt = () => {
    if (ap > 0) {
      setProfile({ ...profile, int: profile.int + 1 });
      setAp(ap - 1);
    } else {
      alert('AP not enoght');
    }
  };

  const decInt = () => {
    if (profile.int > 0) {
      setProfile({ ...profile, int: profile.int - 1 });
      setAp(ap + 1);
    } else {
      alert('INT value or AP can not be less than 0');
    }
  };

  const incAgi = () => {
    if (ap > 0) {
      setProfile({ ...profile, agi: profile.agi + 1 });
      setAp(ap - 1);
    } else {
      alert('AP not enoght');
    }
  };

  const decAgi = () => {
    if (profile.agi > 0) {
      setProfile({ ...profile, agi: profile.agi - 1 });
      setAp(ap + 1);
    } else {
      alert('AGI value or AP can not be less than 0');
    }
  };

  const incLuk = () => {
    if (ap > 0) {
      setProfile({ ...profile, luk: profile.luk + 1 });
      setAp(ap - 1);
    } else {
      alert('AP not enoght');
    }
  };

  const decLuk = () => {
    if (profile.luk > 0) {
      setProfile({ ...profile, luk: profile.luk - 1 });
      setAp(ap + 1);
    } else {
      alert('LUK value or AP can not be less than 0');
    }
  };

  const handleSave = () => {
    if (ap === 0) {
      setAp(0);
      sendProfile();
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
              <AddIcon onClick={incStr} />
            </Fab>
            <HeroProfileDetailValue>{profile.str}</HeroProfileDetailValue>
            <Fab color="secondary" aria-label="remove">
              <RemoveIcon onClick={decStr} />
            </Fab>
          </HeroProfileDetailTitle>
          <HeroProfileDetailTitle>
            INT：
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={incInt} />
            </Fab>
            <HeroProfileDetailValue>{profile.int}</HeroProfileDetailValue>
            <Fab color="secondary" aria-label="remove">
              <RemoveIcon onClick={decInt} />
            </Fab>
          </HeroProfileDetailTitle>
          <HeroProfileDetailTitle>
            AGI：
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={incAgi} />
            </Fab>
            <HeroProfileDetailValue>{profile.agi}</HeroProfileDetailValue>
            <Fab color="secondary" aria-label="remove">
              <RemoveIcon onClick={decAgi} />
            </Fab>
          </HeroProfileDetailTitle>
          <HeroProfileDetailTitle>
            LUK：
            <Fab color="primary" aria-label="add">
              <AddIcon onClick={incLuk} />
            </Fab>
            <HeroProfileDetailValue>{profile.luk}</HeroProfileDetailValue>
            <Fab color="secondary" aria-label="remove">
              <RemoveIcon onClick={decLuk} />
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

HeroProfile.propTypes = {
  heroId: PropTypes.string,
  history: PropTypes.object,
};

export default withRouter(HeroProfile);
