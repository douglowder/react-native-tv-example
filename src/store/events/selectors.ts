import { RootState } from 'store';

export const selectEvents = ({ events: state }: RootState) => {
  return state.data;
};

export const selectEvent = (eventId: string) => {
  return (state: RootState) => {
    const events = selectEvents(state);
    if (!events) {
      return null;
    }

    return events.find(event => event.id === eventId) || null;
  };
};

export const selectChannelEvents = (channelId: string) => {
  return (state: RootState) => {
    const events = selectEvents(state);
    if (!events) {
      return [];
    }

    return events.filter(event => event.channelId === channelId);
  };
};
