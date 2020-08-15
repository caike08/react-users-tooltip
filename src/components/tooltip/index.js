import React from 'react'
import './tooltip.scss'

const listWithLimit = (maxItems) => (list) => {
  const items = list.slice(0, maxItems);
  const remaining = Math.max(list.length - maxItems, 0);
  return { items, remaining };
};

const TooltipItems = ({ list, max, renderItem, renderRemaining }) => {
  const { items, remaining } = listWithLimit(max)(list);
  return (
    <>
      {items.map(renderItem)}
      {Boolean(remaining) && renderRemaining(remaining)}
      {list.length && (<small>Total of {list.length} items within tooltip</small>)}
    </>
  );
}

export default TooltipItems
