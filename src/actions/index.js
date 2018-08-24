import { INCREASE_VOTE } from './types'

export const increaseVote = (contestantId) => {
  return {
    type: INCREASE_VOTE,
    payload: {id: contestantId}
  }
}

export const decreaseVote = (contestantId) => {
  return {
    type: 'DECREASE_VOTE',
    payload: {id: contestantId}
  }
}
