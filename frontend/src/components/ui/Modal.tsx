interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export function Modal({ isOpen, children, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute z-10 inset-0 w-full h-full backdrop-blur-xs flex items-center justify-center"
      onClick={onClose}
    >
      <div className="relative z-20">{children}</div>
    </div>
  );
}
