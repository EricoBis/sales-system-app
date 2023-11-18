'use client';
import { Button } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'
import OrdersContent from './OrdersContent';

function Orders() {
  const {data:session} = useSession()
  
  if (session) {
    return (
      <>
        <OrdersContent user={session.user} />
      </>
    );
  }

  return (
    <div className="flex flex-col items-center mt-32 mb-10">
      <h1 className="mb-5">Você não está logado em sua conta!</h1>
      <Button href="/api/auth/signin" as={Link} color="primary" variant="shadow">
        Fazer login
      </Button>
    </div>
  );
}

export default Orders