import { StoreContext } from '../../../StoreContext.jsx';
import Friends from './Friends.jsx';

const FriendsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        return <Friends friends={state.sidebar.friends} />;
      }}
    </StoreContext.Consumer>
  );
};

export default FriendsContainer;
