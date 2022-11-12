import { useEffect } from "react"
import { createPortal } from "react-dom"



const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ onClose, image, tag }) => {

    useEffect(() => {
        const closeByEscape = e => {
            if (e.code !== 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', closeByEscape)
        return () => {
            window.removeEventListener('keydown', closeByEscape)
        }
    }, [onClose])

    const closeByBackdrop = e => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return createPortal(<div className='Overlay' onClick={closeByBackdrop}>
        <div className='Modal' >
            <img src={image} alt={tag} />
        </div>
    </div>, modalRoot)
}

