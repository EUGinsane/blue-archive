export default function Home() {
  return (
    <>
      <header className="flex justify-center">
        <img src="/images/logo.png" />
      </header>
      <main>
        <div className="flex justify-center">
          <img src="images/hoshino.png" className="h-full absolute ml-48 animate-rotate" />
          <img src="images/shiroko.png" className="h-full z-10" />
          <img src="images/serika.png" className="h-full" />
        </div>
      </main>
    </>
  );
}
