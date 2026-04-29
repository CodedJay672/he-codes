"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import React, { startTransition, useOptimistic } from 'react'

const Tab = ({ cat }: { cat: { name: string; icon: string, value: string } }) => {
  const query = useSearchParams()
  const currentTab = query.get('tab') || '';
  const [optimisticValue, setOptimisticValue] = useOptimistic(currentTab);

  const router = useRouter();


  const handleClick = () => {
    const searchParam = new URLSearchParams(query.toString());
    if (cat.value) {
      searchParam.set('tab', cat.value);
    } else {
      searchParam.delete('tab');
    }
    startTransition(() => {
      setOptimisticValue(cat.value);
      router.push(`?${searchParam.toString()}`, { scroll: false });
    })
  }


  return (
    <button
      onClick={handleClick}
      className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 border border-primary/30 ${optimisticValue === cat.value ? 'bg-primary text-white' : 'bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-white'}`}
    >
      <span className="mr-2">{cat.icon}</span>
      {cat.name}
    </button>
  )
}

export default Tab