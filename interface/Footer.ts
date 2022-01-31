import { ReactNode } from 'react';

export interface FooterMenu {
  id: number;
  title?: string;
  icon?: ReactNode;
  url: string;
}

export interface TypeDataFooter1 {
  id: number;
  label: string;
  dataChild: FooterMenu[];
}
