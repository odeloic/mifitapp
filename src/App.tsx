import './App.css'
import Button from './components/Button'

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl">MiFit - Workout planner on demand.</h1>
        <p className="mb-4">Plan weekly workouts in 1 min.</p>
        <Button
          title="Plan weekly workouts"
          onClick={() => null}
        />
      </div>
    </>
  )
}

export default App
