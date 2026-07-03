import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
          <h1 className="text-5xl font-bold">
            Welcome to My Portfolio
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;