import React from 'react'
import HabitListItem from './HabitListItem'

import { connect } from 'react-redux'

import { findBossHabit, findSadHabits } from '../utils'

function Agenda ({ user }) {
  const topHabit = findBossHabit(user)
  const bottomTwoHabits = findSadHabits(user)

  const topHabitID = topHabit ? topHabit.id : null
  // const topHabitTitle = topHabit ? topHabit.title : null
  // const topHabitGoalCount = topHabit ? topHabit.goalCount : null

  const b1ID = bottomTwoHabits ? bottomTwoHabits[0].id : null
  const b1 = bottomTwoHabits ? bottomTwoHabits[0] : null

  const b2ID = bottomTwoHabits ? bottomTwoHabits[1].id : null
  const b2 = bottomTwoHabits ? bottomTwoHabits[1] : null

  // const b1GoalCount = bottomTwoHabits ? bottomTwoHabits[0].goalCount : null
  // const b2Title = bottomTwoHabits ? bottomTwoHabits[1].title : null
  // const b2GoalCount = bottomTwoHabits ? bottomTwoHabits[1].goalCount : null

  return (
    <div className="bg-white shadow-sm rounded-3 px-3 pb-1 pt-2 mb-sm-3">
      <div className="row">
        <h3 className="module-header">Agenda</h3>
        <h4>Your top performing habit</h4>
        <div className="habitPH mb-2 rounded-3">
          <HabitListItem
            key={topHabitID}
            habit={topHabit}
            user={user}
          />
        </div>
        <h4>Habits needing some love</h4>
        <div className="habitPH mb-2 rounded-3">
          <HabitListItem
            key={b1ID}
            habit={b1}
            user={user}
          />
        </div>
        <div className="habitPH mb-2 rounded-3">
          <HabitListItem
            key={b2ID}
            habit={b2}
            user={user}
          />
        </div>
        <h2>Keep up that momentum!</h2>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Agenda)
