'use client';
import { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const LeftBar = () => {
  const [open, setOpen] = useState<boolean>(true);
  const pathname = usePathname();
  const pages = [
    {
      logo: <FaReact color="#5ED4F4" />,
      title: 'home.jsx',
      path: '/',
    },
    {
      logo: <FaHtml5 color="#DE4B25" />,
      title: 'aboute.html',
      path: '/about',
    },
    {
      logo: <SiTypescript color="#2F75C0" />,
      title: 'stack.ts',
      path: '/technologies',
    },
    {
      logo: <VscJson color="#f1980d" />,
      title: 'projects.json',
      path: '/projects',
    },
    {
      logo: <SiJavascript color="#E9D54B" />,
      title: 'contact.js',
      path: '/contact',
    },
  ];
  return (
    <div className="w-[300px] border border-b-0 border-t-0 border-l-headerBorderColor border-r-leftSideBorder">
      <div className="w-full px-4 py-2">
        <div className="font-code block font-light text-textEditorColor">
          EXPLORER
        </div>
      </div>
      <button
        title="open-folder-structure"
        type="button"
        className="flex w-full items-center gap-2 px-5 py-1 text-base text-textEditorColor hover:bg-textEditorHoverBg hover:text-textEditorHoverColor"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {open ? <FaFolderOpen color="#90a4ad" /> : <FaFolder color="#90a4ad" />}

        <p>Portfolio</p>
      </button>
      {open && (
        <>
          {pages.map((item, key) => (
            <Link
              key={key}
              href={item?.path || '/'}
              className={`${
                pathname === item?.path && 'active'
              } relative flex items-center gap-2 px-14 py-1 text-base text-textEditorColor hover:bg-textEditorHoverBg hover:text-textEditorHoverColor [&.active]:bg-themePrimaryColor [&.active]:text-tabBarActiveTextColor`}
            >
              {item.logo}
              {item.title}
            </Link>
          ))}
        </>
      )}
    </div>
  );
};
