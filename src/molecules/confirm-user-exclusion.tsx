import { Button } from '../atoms/button'

interface ConfirmationProps {
  onConfirm: { (): void }
  onCancel: { (): void }
}
export const ConfirmUserExclusion = ({ onCancel, onConfirm }: ConfirmationProps) => {
  return (
    <div className="w-full max-w-sm flex flex-wrap">
      <div className="basis-full pt-5 pb-2 px-5 text-xl font-bold text-light-onSurface dark:text-dark-onSurface border-b-[1px] border-b-light-primary dark:border-b-dark-primary">
        <h3>Confirmation</h3>
      </div>
      <div className="pt-2 px-5 basis-full my-2 font-thin text-lg text-light-onSurface dark:text-dark-onSurface">
        <p>This Action can't be undone. Please confirm that this is your intention!</p>
      </div>
      <div className="pb-5 pt-2 px-5 basis-full mt-2 flex justify-end">
        <Button variant="error" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </div>
  )
}
