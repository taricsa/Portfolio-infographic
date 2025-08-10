"use client"
import { Fragment, type ReactNode, useEffect } from 'react'
import { Dialog as HDialog, Transition } from '@headlessui/react'
import { cn } from '../../lib/utils'

type DialogProps = {
  open: boolean
  onClose: () => void
  title?: ReactNode
  children: ReactNode
}

export function Dialog({ open, onClose, title, children }: DialogProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <Transition appear show={open} as={Fragment}>
      <HDialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <HDialog.Panel className={cn('w-full max-w-2xl transform overflow-hidden rounded-2xl border border-white/10 bg-[#0F1424] p-6 text-left align-middle shadow-xl transition-all')}>
                {title ? (
                  <HDialog.Title as="h3" className="text-lg font-semibold">
                    {title}
                  </HDialog.Title>
                ) : null}
                <div className="mt-4 max-h-[70vh] overflow-y-auto pr-2">{children}</div>
              </HDialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </HDialog>
    </Transition>
  )
}


