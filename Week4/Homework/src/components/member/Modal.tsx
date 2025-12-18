import { cn } from '@/utils/cn';

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
  onCancel: () => void;
  danger?: boolean;
}

const Modal = ({
  open,
  title,
  description,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
  danger = false,
}: ModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onCancel}
    >
      <div
        className="w-[360px] rounded-xl bg-white p-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold">{title}</h2>

        {description && (
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        )}

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className={cn(
              'flex-1 rounded-md border py-2 font-medium transition-colors duration-200',
              'border-gray-300 text-gray-700 bg-white',
              'hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-light)] hover:text-white'
            )}
          >
            {cancelText}
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className={cn(
              'flex-1 rounded-md py-2 font-medium text-white transition-colors duration-200',
              danger
                ? 'bg-[var(--color-danger)] hover:bg-[var(--color-danger)]/90'
                : 'bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90'
            )}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
