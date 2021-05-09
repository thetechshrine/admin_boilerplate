import React from 'react';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import Icon from '../library/Icon';

export default {
  DashboadIcon: () => <Icon name='dashboard' />,
  TasksIcon: () => <Icon name='content_paste' />,
  UsersIcon: () => <Icon name='people' />,

  UserIcon: () => <Icon name='person' />,
  LogoutIcon: () => <Icon name='logout' />,

  ArrowLeftIcon: MdKeyboardArrowLeft,
  ArrowRightIcon: MdKeyboardArrowRight
};
