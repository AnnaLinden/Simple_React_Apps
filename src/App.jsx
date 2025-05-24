import ToggleTheme from "./components/5.ColorToggler/ToggleTheme";
import ReactInterview from "./components/7.ReactInterview/ReactInterview";
import Accordion from "./components/8.Accordion/Accordion";
import { reactInterviewGlossary } from "./components/8.Accordion/utils/reactGlossary";
import Form from "./components/9.Form/Form";

function App() {
  return (
    <>
      {/*  <ToggleTheme />*/}
      {/* <ReactInterview /> */}
      {/* <div className=''>
        {reactInterviewGlossary.map(({ term, definition }) => (
          <Accordion term={term} definition={definition} />
        ))}
      </div> */}
      <Form />
    </>
  );
}

export default App;
