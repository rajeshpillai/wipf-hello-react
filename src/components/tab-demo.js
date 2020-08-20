import React from 'react';
import Tabs from './tabs';

function TabDemo(props) {
  const onTabChanged = (index) => {
    alert(index);
  }

  return (
    <div>
      <h2>Tab Demo</h2>
      <Tabs onTabChanged={onTabChanged}>
        <Tabs.Tab title="React">
          Some react content here.
        </Tabs.Tab>
        <Tabs.Tab title="Vue">
          Some Vue content here.
        </Tabs.Tab>
        <Tabs.Tab title="Angular">
          Some Angular content here.
        </Tabs.Tab>
        <Tabs.Tab title="Svelte">
          Some Svelte content here.
        </Tabs.Tab>
      </Tabs>
   </div>
  )
}

export default TabDemo;