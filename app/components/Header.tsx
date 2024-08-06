import { GrSearch } from 'react-icons/gr';

const Header = () => {
  return (
    <section className="left-0 top-0 flex h-[50px] w-full items-center justify-between border-b border-b-headerBorderColor bg-bgColor pl-3">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <div className="flex h-4/6 items-center rounded-lg border-solid xl:border xl:pl-60 xl:pr-60">
        <GrSearch className="mr-2 rotate-90 text-xl text-primaryColor opacity-80" />
        <input
          className="font-code justify-center border-none bg-transparent text-sm text-primaryColor opacity-80 outline-none"
          placeholder="portfolio"
        />
      </div>
    </section>
  );
};

export default Header;
