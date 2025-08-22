import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
import { Challenge, Challenges, Content } from "./assets/styledComponent.jsx";
import Header from "./components/Header.jsx";
function App() {
  return (
    <>
      <Content>
        <Header description={'Stop the timer once you estimate that time is (almost) up'}/>
        <Player />
        <Challenges>
          <TimerChallenge title={`Easy`} targetTime={1} />
          <TimerChallenge title={`Not Easy`} targetTime={5} />
          <TimerChallenge title={`Medium`} targetTime={10} />
          <TimerChallenge title={`Hard`} targetTime={15} />
        </Challenges>
      </Content>
    </>
  );
}

export default App;
