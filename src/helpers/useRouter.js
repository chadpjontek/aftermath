import { useContext } from 'react';
import { __RouterContext } from 'react-router-dom';

/**
 * A hook to return Router history
 */
const useRouter = () => useContext(__RouterContext);

export default useRouter;