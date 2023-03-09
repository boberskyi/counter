import React, {useState} from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Btn} from "./Btn";
import {BtnPropsType} from "./BtnTypes";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Button',
  component: Btn,
} as ComponentMeta<typeof Btn>;

 const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;
//const Template: ComponentStory<BtnPropsType> = (args) => <Btn {...args} />;

export const Default = Template.bind({});
export const Disabled = Template.bind({});

const onClickCallback = action('Button was clicked');

Default.args = {
  children: 'default',
  active: true,
  onClick: onClickCallback
};

Disabled.args = {
  children: 'disabled',
  active: false,
};