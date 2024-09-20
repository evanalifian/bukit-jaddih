import BackButton from "../_components/BackButton";

export default function Layout({ children }) {
  const getYear = new Date().getYear();

  return (
    <>
      <main>
        <div className="max-w-6xl mx-auto py-20 px-4">
          <header className="mb-4">
            <BackButton />
          </header>
          {children}
        </div>
      </main>
      <footer>
        <div className="max-w-4xl mx-auto text-center text-sm py-8">
          <span>Bukit Jeddih &copy; {getYear}</span>
        </div>
      </footer>
    </>
  );
}
