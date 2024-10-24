'use client';

import { Button, GithubIcon } from '@/components';
import { signIn } from 'next-auth/react';

export const GithubLoginButton = () => {
  return (
    <Button className="mt-16" onClick={() => signIn('github')}>
      <GithubIcon />
      Login com GitHub
  </Button> 
  )
}
