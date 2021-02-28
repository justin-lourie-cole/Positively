import { addHabit, patchHabit, deleteHabit } from '../api/apiClient'

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  }
}

export const setHabit = (habit) => {
  return {
    type: 'SET_HABIT',
    habit
  }
}

export function deleteTheHabit (id) {
  return {
    type: 'DELETE_HABIT',
    id
  }
}

export const saveHabit = (habit) => {
  return dispatch => {
    addHabit(habit)
      .then((habit) => {
        dispatch(setHabit(habit))
        return null
      })
      .catch(err =>
        console.log(err))
  }
}

export const removeHabit = (id) => {
  return dispatch => {
    deleteHabit(id)
      .then(() => {
        dispatch(deleteTheHabit(id))
        return null
      })
      .catch(err =>
        console.log(err))
  }
}

export const updateHabit = (id, patchData) => {
  return dispatch => {
    patchHabit(id, patchData)
      .then((habit) => {
        dispatch(setHabit(habit))
        return null
      })
      .catch(err =>
        console.log(err))
  }
}

export const updateCount = (id, goalCount) => {
  return {
    type: 'UPDATE_COUNT',
    id,
    goalCount
  }
}

export const updateXp = (xp) => {
  return {
    type: 'UPDATE_XP',
    xp
  }
}