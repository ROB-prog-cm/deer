import { Footer, Header, Informations, Main, Sidebar } from './imports';


function App() {

  return (
    <div className="flex flex-col">
      <Header />
      <Informations/>
      <div className={'flex'}>
        <Sidebar/>
        <Main />
      </div>
      <Footer/>
    </div>
  );
}

export default App;