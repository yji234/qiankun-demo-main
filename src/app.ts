import { useState } from 'react';

export function useQiankunStateForSlave() {
    const [masterState, setMasterState] = useState({
        name: '张三',
    });
  
    return {
      masterState,
      setMasterState,
    };
}
