import { Preloaders } from '@app/models';

/**
 * Props
 */
type PreloaderProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * Preloader id
   */
  id?: Preloaders;
  /**
   * Children
   */
  children?: any;
  /**
   * Is loader active
   */
  isActive?: boolean;
};

export { PreloaderProps };
