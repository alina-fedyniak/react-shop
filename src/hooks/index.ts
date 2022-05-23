import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TAppDispatch } from '../redux/store';
import { TGlobalState } from '../types';

// REACT HOOKS:
export {
    useEffect, useState, useMemo, useContext,
} from 'react';

// REDUX HOOKS :
export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TGlobalState> = useSelector;

// ROUTER HOOKS:
export { useLocation } from 'react-router-dom';

// CUSTOM HOOKS: