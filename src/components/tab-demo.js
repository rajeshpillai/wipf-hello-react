import React from 'react';
import Tabs from './tabs';
import Tab from './tabs/tab';

function TabDemo(props) {
  const onTabChanged = (index) => {
    alert(index);
  }

  return (
    <div>
      <h2>Tab Demo</h2>
      <Tabs onTabChanged={onTabChanged}>
        <Tab title="React">
          Some react content here.
        </Tab>
        <Tab title="Vue">
          Some Vue content here.
        </Tab>
        <Tab title="Angular">
          Some Angular content here.
        </Tab>
        <Tab title="Svelte">
          Some Svelte content here.
        </Tab>
      </Tabs>
   </div>
  )
}

export default TabDemo;