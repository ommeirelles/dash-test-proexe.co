import { ArrowNarrowRightIcon, ArrowNarrowLeftIcon } from '@heroicons/react/solid'
import { Button } from '../atoms/button'

export const Pagination = () => {
  return (
    <div className="flex flex-col items-center">
      {/* <!-- Help text --> */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to{' '}
        <span className="font-semibold text-gray-900 dark:text-white">10</span> of{' '}
        <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        {/* <!-- Buttons --> */}
        <Button className="inline-flex items-center py-2 px-4 text-sm font-medium rounded-r border-0">
          <ArrowNarrowLeftIcon className="w-5 mt-[-5px] box-content pr-1" />
          Prev
        </Button>
        <Button className="inline-flex items-center py-2 px-4 text-sm font-medium rounded-l border-0">
          Next
          <ArrowNarrowRightIcon className="w-5 mt-[-5px] pl-1 box-content" />
        </Button>
      </div>
    </div>
  )
}
