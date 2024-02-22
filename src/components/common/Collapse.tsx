import React from 'react'
import { useCollapse } from 'react-collapsed';

interface Props {
  isActive: boolean
  children: React.ReactNode
}

const Collapse = ({ isActive, children }: Props) => {
  const [isExpanded, setExpanded] = React.useState(isActive);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded
  });
  React.useEffect(() => {
    setExpanded(isActive);
  }, [isActive, setExpanded]);
  return (
    <>
      <div  {...getToggleProps({
        style: { display: "block" },
        onClick: () => setExpanded((x) => !x)
      })} {...getCollapseProps()}>
        {children}
      </div>
    </>
  );
}

export default Collapse