// @flow

import { createSelector } from 'reselect';
import { NAME } from './../constants';

export const getPageData = (state: any) => state[NAME].pageData;
export const getLoader = (state: any) => state[NAME].isLoad;
export const getError = (state: any) => state[NAME].error;
export const getSuccess = (state: any) => state[NAME].isSuccess;


export const selectLoader = createSelector(getLoader, (isLoad: any) => {
  return isLoad;
});

export const selectPageData = createSelector(getPageData, (pageData: any) => {
  return pageData;
});

export const selectError = createSelector(getError, (error: any) => {
  return error;
});

export const selectSuccess = createSelector(getSuccess, (isSuccess: any) => {
  return isSuccess;
});