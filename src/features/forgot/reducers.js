// @flow
import * as t from './actionTypes';
import type { State } from './types';

export const initialState: State = {
  error: null,
  pageData: null,
  isLoad: false,
  isSuccess: null,
};

export default (state: State = initialState, action: any) => {
  switch (action.type) {
    case t.FORGOT: {
      return { ...state, isLoad: true, error: null };
    }
    case t.FORGOT_FAILED: {
      return { ...state, isLoad: false, error: action.error };
    }
    case t.FORGOT_SUCCEEDED: {
      return { ...state, isLoad: false, pageData: action.payload, isSuccess: action.isSuccess };
    }

    case t.REFRESH: {
      return initialState;
    }
    default:
      return state;
  }
};