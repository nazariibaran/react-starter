import { Preloaders } from '@app/redux/ui/models';

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
