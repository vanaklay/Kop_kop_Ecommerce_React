import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserReducer from './UserReducer';
import CartReducer from './CartReducer';
import DirectoryReducer from './DirectoryReducer';
import CollectionReducer from './CollectionReducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    collection: CollectionReducer
});

export default persistReducer(persistConfig, rootReducer);