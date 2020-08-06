import { Modals } from '@app/redux/ui/models';

/**
 * Props
 */
type ModalProps = {
  /**
   * Modal id
   */
  id?: Modals;
  /**
   * Classname
   */
  className?: string;
  /**
   * Is loader active
   */
  isActive?: boolean;
};

export { ModalProps };
