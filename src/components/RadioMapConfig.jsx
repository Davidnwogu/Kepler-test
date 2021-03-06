import { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './MediaCard';
import { CARDPROPS } from '../constants';
import { keys } from '@material-ui/core/styles/createBreakpoints';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  grid:{
    margin: 'auto'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export function MapConfigGrid({ radioValue, handleRadioChange }) {
  const classes = useStyles();

  const [selectedCard, setSelectedCard] = useState('')

  const handleSelected = (event) => {
    const key = event.target.alt
    setSelectedCard(key)
  }

  const handleOnClick = (event) => {
    handleRadioChange(event)
    handleSelected(event)
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.grid}>
        {CARDPROPS.map((card, index) => (
          <Grid key={index} item xs={6}>
            <MediaCard
              selected={(selectedCard === card.value) ? true : false}
              img={card.img}
              title={card.title}
              description={card.tooltip}
              value={card.value}
              handleOnClick={handleOnClick}
            />
          </Grid>
        ))}
      </Grid>
      <br />
    </div>
  );
}

export function RadioMapConfig({ radioValue, handleRadioChange }) {
  
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Map Configuration</FormLabel> */}
      <RadioGroup aria-label="configurations" name="configurations" value={radioValue} onChange={handleRadioChange}>
        <FormControlLabel value="cluster" control={<Radio />} label="Cluster Visualization" />
        <FormControlLabel value="description" control={<Radio />} label="Points by description" />
        <FormControlLabel value="weapon" control={<Radio />} label="Points by weapon" />
        <FormControlLabel value="region" control={<Radio />} label="Points by region" />
        <FormControlLabel value="point" control={<Radio />} label="Points Only" />
        <FormControlLabel value="custom" control={<Radio />} label="Custom" />
      </RadioGroup>
    </FormControl>
  );
}


