import React, { useState } from 'react';
import data from './assets/data'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import User from './components/user'
import TooltipItems from './components/tooltip';
import './App.scss';

const MAX_USERS_DISPLAYED = 4
const MAX_USERS_WITHIN_TOOLTIP = 4

const renderEachItem = ((user) => <User key={user.id} user={user}/>)
const renderRemainingItems = ((remaining) => <span>And {remaining} more...</span>)
const noUsers = (<span className='noUsers' role='img' aria-label='sad emoji'>Couldn't find any user 😢</span>)

const App = () => {
  const { users } = data;
  const [tooltipItemsCount, setTooltipItemsCount] = useState(MAX_USERS_WITHIN_TOOLTIP);

  const handleSlider = (event, newValue) => {
    console.debug(event)
    setTooltipItemsCount(newValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Choose your character</h1>
      </header>

      <nav className='mainContent'>
        <div className='tooltip-items-slider'>
          <Typography id="items-within-tooltip-slider" gutterBottom>
            Items to be displayed within tooltip
          </Typography>
          <Slider
            defaultValue={MAX_USERS_WITHIN_TOOLTIP}
            step={1}
            marks
            min={0}
            max={users.slice(MAX_USERS_DISPLAYED, users.length).length}
            valueLabelDisplay="auto"
            onChange={handleSlider}
            aria-labelledby="items-within-tooltip-slider"
          />
        </div>
        <div className='visibleUsers'>
        {
          !!users ? 
            users.slice(0, MAX_USERS_DISPLAYED).map(user => <User key={user.id} user={user} />) :
            noUsers
        }
        </div>
        <div className='withinTooltip'>
        {
          <TooltipItems 
            max={tooltipItemsCount}
            list={users.slice(MAX_USERS_DISPLAYED, users.length)}
            renderItem={renderEachItem}
            renderRemaining={renderRemainingItems}
          />
        }
        </div>
      </nav>
    </div>
  );
}

export default App;
