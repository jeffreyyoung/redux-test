import createActions from './createActions';
import createPrefixedActionMap from './createPrefixedActionMap';
import createReducer from './createReducer';



const createReducersAndGetActionsFunction = (defs) => {
  const reducers = {};
  const prefixedActionMaps = {};
  
  Object.keys(defs).forEach(key => {
    const {actions, defaultState} = defs[key];
    prefixedActionMaps[key] = createPrefixedActionMap({
      prefix: key,
      actions
    });

    reducers[key] = createReducer({
      defaultState,
      prefixedActionMap: prefixedActionMaps[key]
    })
  });
  
  const getActions = (dispatch) => {
    const actions = {};
    
    Object.keys(prefixedActionMaps).forEach(key => {
      const { asyncActions } = defs[key];
      
      //create actions
      const actionsForKey = createActions({
        dispatch,
        prefixedActionMap: prefixedActionMaps[key]
      });
      
      
      //add async actions
      Object.keys(asyncActions).forEach(asyncActionKey => {
        actionsForKey[asyncActionKey] = (...args) => {
          asyncActions[asyncActionKey](actionsForKey, ...args);
        }
      });
      
      actions[key] = actionsForKey;
    });
    
    return actions;
  }
  
  return {
    reducers,
    getActions
  }
}

export default createReducersAndGetActionsFunction;