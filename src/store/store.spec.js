import * as ActionTypes from '../constants/actionTypes';

import MockDate from 'mockdate';
import { createStore } from 'redux';

import initialState from '../reducers/initialState';
import rootReducer from '../reducers';

describe('Store', () => {
  let dateModified;
  beforeAll(() => {
    // hardcoded date for consistency in tests and snapshots on all machines
    MockDate.set(new Date("1/31 23:14:01"));
    dateModified = getFormattedDateTime();
  });
  afterAll(() => MockDate.reset());
});