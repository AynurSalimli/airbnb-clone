'use client'
import React, { useEffect, useCallback, useState } from "react";


interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;

}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryLabel,
    secondaryAction

}) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
            onClose()
        }, 300)
    }, [disabled, onClose]);

    const handleSubmit = useCallback(()=>{
        if(disabled){
            return;
        }
        onSubmit()
    },[disabled, onSubmit])

    return (
        <div></div>
    )
}

export default Modal;