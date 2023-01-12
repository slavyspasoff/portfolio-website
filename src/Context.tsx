import { createContext, useState } from 'react';
import { type PaletteMode } from '@mui/material';
interface Ctx {
  mode: PaletteMode;
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

const ctx = createContext<Ctx>(null!);

interface Props {
  children: React.ReactNode;
}

const Context = ({ children }: Props) => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  return <ctx.Provider value={{ mode, setMode }}>{children}</ctx.Provider>;
};

export { Context as default, ctx };
