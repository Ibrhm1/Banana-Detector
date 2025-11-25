import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { NAVBAR_MENUS } from '~/constants/navbar-constant';
import { Button } from '../ui/button';

type ButtonGetStartedProps = {
  title?: string;
  href: string;
  icon?: React.ElementType;
  size?: 'sm' | 'lg' | 'default';
};

export default function ButtonGetStarted(props: ButtonGetStartedProps) {
  return (
    <Button
      asChild
      size={props.size || 'lg'}
      variant="default"
      className="rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 bg-linear-to-r from-primary to-chart-2"
    >
      <Link
        href={props.href || NAVBAR_MENUS[0].href}
        className="font-semibold text-white"
      >
        {props.title || 'Mulai Deteksi'}
        {props.icon ? <props.icon /> : <ArrowRight />}
      </Link>
    </Button>
  );
}
