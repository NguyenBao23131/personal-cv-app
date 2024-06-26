"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './SearchBar';
import SwitchThemes from './SwitchThemes';
import SignInDialogButton from './SignInDialogButton';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const TopBar = () => {
  return (
    <nav className='topBar dark:bg-[#161622] dark:border-gray-700'>
      <div className='flex items-center justify-between gap-x-4 p-4 w-full h-full max-md:p-6'>
        <Link href="/" className='flex gap-2 items-center justify-center'>
          <Image 
            src="/assets/images/logoAvt.png"
            alt='logo'
            width={40}
            height={40}
            className='object-contain rounded-full max-md:hidden'
          />
          <p className='logo_text dark:text-[#FF8E01]'>DevAnonitos</p>
        </Link>
        {/* <HamburgerMenuIcon width={20} height={20} /> */}

        <div className='flex items-center justify-center'>
          <SearchBar />
        </div>

        <div className='flex items-center justify-center'>
          <SwitchThemes />
          <SignInDialogButton />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;