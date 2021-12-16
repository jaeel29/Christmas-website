import { FC } from 'react';
import { SIcon } from './IconComp.styled';

const IconComp: FC<{
  name?: string;
  sizeIcon?: number | undefined;
  color?: string | undefined;
}> = ({ name, sizeIcon, color }) => {
  console.log(`icons-${name}`);

  return (
    <>
      <SIcon className={`icon-${name}`} size={sizeIcon} color={color}></SIcon>
    </>
  );
};

export default IconComp;
